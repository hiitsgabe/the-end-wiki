import { getHotGames as getHotGamesExternal } from "../external/igdb"

export const getHotGames = async () => {
    const response = await getHotGamesExternal()
    return response
}
