import { IGDBGame } from "@/interfaces/igdb";
import axios from "axios";

export const twitchApi = axios.create({
    baseURL: "https://id.twitch.tv/oauth2/token"
})

export const igdbApi = axios.create({
    baseURL: "https://api.igdb.com/v4/"
})

let accessToken: string | null = null
let accessTokenExpiry: number | null = null


const getAccessToken = async () => {
    console.log("GETTING ACCESS TOKEN")
    try {
        const response = await twitchApi.post("", {
            client_id: process.env.IGDB_CLIENT_ID,
            client_secret: process.env.IGDB_CLIENT_SECRET,
            grant_type: "client_credentials"
        })
        accessToken = response.data.access_token
        accessTokenExpiry = Date.now() + response.data.expires_in * 1000
        return response.data.access_token
    } catch (error: unknown) {
        console.log(error)
        return null
    }
}

igdbApi.interceptors.request.use(async (config) => {
    if (!accessToken || Date.now() > accessTokenExpiry!) {
        accessToken = await getAccessToken()
    }
    config.headers["Client-Id"] = process.env.IGDB_CLIENT_ID
    config.headers["Authorization"] = `Bearer ${accessToken}`
    return config
})

// RELEVANT METHODS

export const getHotGames = async (): Promise<IGDBGame[]> => {
    const response = await igdbApi.get("games", {
        params: {
            "fields": "*",
            "sort": "popularity:desc",
            "limit": 10
        }
    })
    return response.data
}
