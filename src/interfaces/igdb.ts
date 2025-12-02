export interface IGDBAgeRating {
    id: number;
    category?: IGDBAgeRatingCategoryEnum;
    checksum?: string;
    content_descriptions?: number[] | IGDBAgeRatingContentDescription[];
    organization?: number | IGDBAgeRatingOrganization;
    rating?: IGDBAgeRatingRatingEnum;
    rating_category?: number | IGDBAgeRatingCategory;
    rating_content_descriptions?: number[] | IGDBAgeRatingContentDescriptionV2[];
    rating_cover_url?: string;
    synopsis?: string;
}

export enum IGDBAgeRatingCategoryEnum {
    ESRB = 1,
    PEGI = 2,
    CERO = 3,
    USK = 4,
    GRAC = 5,
    CLASS_IND = 6,
    ACB = 7,
}

export enum IGDBAgeRatingRatingEnum {
    Three = 1,
    Seven = 2,
    Twelve = 3,
    Sixteen = 4,
    Eighteen = 5,
    RP = 6,
    EC = 7,
    E = 8,
    E10 = 9,
    T = 10,
    M = 11,
    AO = 12,
    CERO_A = 13,
    CERO_B = 14,
    CERO_C = 15,
    CERO_D = 16,
    CERO_Z = 17,
    USK_0 = 18,
    USK_6 = 19,
    USK_12 = 20,
    USK_16 = 21,
    USK_18 = 22,
    GRAC_ALL = 23,
    GRAC_Twelve = 24,
    GRAC_Fifteen = 25,
    GRAC_Eighteen = 26,
    GRAC_TESTING = 27,
    CLASS_IND_L = 28,
    CLASS_IND_Ten = 29,
    CLASS_IND_Twelve = 30,
    CLASS_IND_Fourteen = 31,
    CLASS_IND_Sixteen = 32,
    CLASS_IND_Eighteen = 33,
    ACB_G = 34,
    ACB_PG = 35,
    ACB_M = 36,
    ACB_MA15 = 37,
    ACB_R18 = 38,
    ACB_RC = 39,
}

export interface IGDBAgeRatingCategory {
    id: number;
    checksum?: string;
    created_at?: number;
    organization?: number | IGDBAgeRatingOrganization;
    rating?: string;
    updated_at?: number;
}

export interface IGDBAgeRatingContentDescription {
    id: number;
    category?: IGDBAgeRatingContentDescriptionCategoryEnum;
    checksum?: string;
    description?: string;
}

export enum IGDBAgeRatingContentDescriptionCategoryEnum {
    ESRB_alcohol_reference = 1,
    ESRB_animated_blood = 2,
    ESRB_blood = 3,
    ESRB_blood_and_gore = 4,
    ESRB_cartoon_violence = 5,
    ESRB_comic_mischief = 6,
    ESRB_crude_humor = 7,
    ESRB_drug_reference = 8,
    ESRB_fantasy_violence = 9,
    ESRB_intense_violence = 10,
    ESRB_language = 11,
    ESRB_lyrics = 12,
    ESRB_mature_humor = 13,
    ESRB_nudity = 14,
    ESRB_partial_nudity = 15,
    ESRB_real_gambling = 16,
    ESRB_sexual_content = 17,
    ESRB_sexual_themes = 18,
    ESRB_sexual_violence = 19,
    ESRB_simulated_gambling = 20,
    ESRB_strong_language = 21,
    ESRB_strong_lyrics = 22,
    ESRB_strong_sexual_content = 23,
    ESRB_suggestive_themes = 24,
    ESRB_tobacco_reference = 25,
    ESRB_use_of_alcohol = 26,
    ESRB_use_of_drugs = 27,
    ESRB_use_of_tobacco = 28,
    ESRB_violence = 29,
    ESRB_violent_references = 30,
    ESRB_animated_violence = 31,
    ESRB_mild_language = 32,
    ESRB_mild_violence = 33,
    ESRB_use_of_drugs_and_alcohol = 34,
    ESRB_drug_and_alcohol_reference = 35,
    ESRB_mild_suggestive_themes = 36,
    ESRB_mild_cartoon_violence = 37,
    ESRB_mild_blood = 38,
    ESRB_realistic_blood_and_gore = 39,
    ESRB_realistic_violence = 40,
    ESRB_alcohol_and_tobacco_reference = 41,
    ESRB_mature_sexual_themes = 42,
    ESRB_mild_animated_violence = 43,
    ESRB_mild_sexual_themes = 44,
    ESRB_use_of_alcohol_and_tobacco = 45,
    ESRB_animated_blood_and_gore = 46,
    ESRB_mild_fantasy_violence = 47,
    ESRB_mild_lyrics = 48,
    ESRB_realistic_blood = 49,
    PEGI_violence = 50,
    PEGI_sex = 51,
    PEGI_drugs = 52,
    PEGI_fear = 53,
    PEGI_discrimination = 54,
    PEGI_bad_language = 55,
    PEGI_gambling = 56,
    PEGI_online_gameplay = 57,
    PEGI_in_game_purchases = 58,
    CERO_love = 59,
    CERO_sexual_content = 60,
    CERO_violence = 61,
    CERO_horror = 62,
    CERO_drinking_smoking = 63,
    CERO_gambling = 64,
    CERO_crime = 65,
    CERO_controlled_substances = 66,
    CERO_languages_and_others = 67,
    GRAC_sexuality = 68,
    GRAC_violence = 69,
    GRAC_fear_horror_threatening = 70,
    GRAC_language = 71,
    GRAC_alcohol_tobacco_drug = 72,
    GRAC_crime_anti_social = 73,
    GRAC_gambling = 74,
    CLASS_IND_violencia = 75,
    CLASS_IND_violencia_extrema = 76,
    CLASS_IND_conteudo_sexual = 77,
    CLASS_IND_nudez = 78,
    CLASS_IND_sexo = 79,
    CLASS_IND_sexo_explicito = 80,
    CLASS_IND_drogas = 81,
    CLASS_IND_drogas_licitas = 82,
    CLASS_IND_drogas_ilicitas = 83,
    CLASS_IND_linguagem_impropria = 84,
    CLASS_IND_atos_criminosos = 85,
}

export interface IGDBAgeRatingContentDescriptionV2 {
    id: number;
    checksum?: string;
    created_at?: number;
    description?: string;
    organization?: number | IGDBAgeRatingOrganization;
    updated_at?: number;
}

export interface IGDBAgeRatingOrganization {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    updated_at?: number;
}

export interface IGDBAlternativeName {
    id: number;
    checksum?: string;
    comment?: string;
    game?: number | IGDBGame;
    name?: string;
}

export interface IGDBArtwork {
    id: number;
    alpha_channel?: boolean;
    animated?: boolean;
    checksum?: string;
    game?: number | IGDBGame;
    height?: number;
    image_id?: string;
    url?: string;
    width?: number;
}

export interface IGDBCharacter {
    id: number;
    akas?: string[];
    character_gender?: number | IGDBCharacterGender;
    character_species?: number | IGDBCharacterSpecie;
    checksum?: string;
    country_name?: string;
    created_at?: number;
    description?: string;
    games?: number[] | IGDBGame[];
    gender?: IGDBCharacterGenderEnum;
    mug_shot?: number | IGDBCharacterMugShot;
    name?: string;
    slug?: string;
    species?: IGDBCharacterSpeciesEnum;
    updated_at?: number;
    url?: string;
}

export enum IGDBCharacterGenderEnum {
    Male = 0,
    Female = 1,
    Other = 2,
}

export enum IGDBCharacterSpeciesEnum {
    Human = 1,
    Alien = 2,
    Animal = 3,
    Android = 4,
    Unknown = 5,
}

export interface IGDBCharacterGender {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    updated_at?: number;
}

export interface IGDBCharacterMugShot {
    id: number;
    alpha_channel?: boolean;
    animated?: boolean;
    checksum?: string;
    height?: number;
    image_id?: string;
    url?: string;
    width?: number;
}

export interface IGDBCharacterSpecie {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    updated_at?: number;
}

export interface IGDBCollection {
    id: number;
    as_child_relations?: number[] | IGDBCollectionRelation[];
    as_parent_relations?: number[] | IGDBCollectionRelation[];
    checksum?: string;
    created_at?: number;
    games?: number[] | IGDBGame[];
    name?: string;
    slug?: string;
    type?: number | IGDBCollectionType;
    updated_at?: number;
    url?: string;
}

export interface IGDBCollectionMembership {
    id: number;
    checksum?: string;
    collection?: number | IGDBCollection;
    created_at?: number;
    game?: number | IGDBGame;
    type?: number | IGDBCollectionMembershipType;
    updated_at?: number;
}

export interface IGDBCollectionMembershipType {
    id: number;
    allowed_collection_type?: number | IGDBCollectionType;
    checksum?: string;
    created_at?: number;
    description?: string;
    name?: string;
    updated_at?: number;
}

export interface IGDBCollectionRelation {
    id: number;
    checksum?: string;
    child_collection?: number | IGDBCollection;
    created_at?: number;
    parent_collection?: number | IGDBCollection;
    type?: number | IGDBCollectionRelationType;
    updated_at?: number;
}

export interface IGDBCollectionRelationType {
    id: number;
    allowed_child_type?: number | IGDBCollectionType;
    allowed_parent_type?: number | IGDBCollectionType;
    checksum?: string;
    created_at?: number;
    description?: string;
    name?: string;
    updated_at?: number;
}

export interface IGDBCollectionType {
    id: number;
    checksum?: string;
    created_at?: number;
    description?: string;
    name?: string;
    updated_at?: number;
}

export interface IGDBCompany {
    id: number;
    change_date?: number;
    change_date_category?: IGDBCompanyChangeDateCategoryEnum;
    change_date_format?: number | IGDBDateFormat;
    changed_company_id?: number | IGDBCompany;
    checksum?: string;
    country?: number;
    created_at?: number;
    description?: string;
    developed?: number[] | IGDBGame[];
    logo?: number | IGDBCompanyLogo;
    name?: string;
    parent?: number | IGDBCompany;
    published?: number[] | IGDBGame[];
    slug?: string;
    start_date?: number;
    start_date_category?: IGDBCompanyStartDateCategoryEnum;
    start_date_format?: number | IGDBDateFormat;
    status?: number | IGDBCompanyStatus;
    updated_at?: number;
    url?: string;
    websites?: number[] | IGDBCompanyWebsite[];
}

export enum IGDBCompanyChangeDateCategoryEnum {
    YYYYMMMMDD = 0,
    YYYYMMMM = 1,
    YYYY = 2,
    YYYYQ1 = 3,
    YYYYQ2 = 4,
    YYYYQ3 = 5,
    YYYYQ4 = 6,
    TBD = 7,
}

export enum IGDBCompanyStartDateCategoryEnum {
    YYYYMMMMDD = 0,
    YYYYMMMM = 1,
    YYYY = 2,
    YYYYQ1 = 3,
    YYYYQ2 = 4,
    YYYYQ3 = 5,
    YYYYQ4 = 6,
    TBD = 7,
}

export interface IGDBCompanyLogo {
    id: number;
    alpha_channel?: boolean;
    animated?: boolean;
    checksum?: string;
    height?: number;
    image_id?: string;
    url?: string;
    width?: number;
}

export interface IGDBCompanyStatus {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    updated_at?: number;
}

export interface IGDBCompanyWebsite {
    id: number;
    category?: IGDBCompanyWebsiteCategoryEnum;
    checksum?: string;
    trusted?: boolean;
    type?: number | IGDBWebsiteType;
    url?: string;
}

export enum IGDBCompanyWebsiteCategoryEnum {
    official = 1,
    wikia = 2,
    wikipedia = 3,
    facebook = 4,
    twitter = 5,
    twitch = 6,
    instagram = 8,
    youtube = 9,
    iphone = 10,
    ipad = 11,
    android = 12,
    steam = 13,
    reddit = 14,
    itch = 15,
    epicgames = 16,
    gog = 17,
    discord = 18,
    bluesky = 19,
}

export interface IGDBCover {
    id: number;
    alpha_channel?: boolean;
    animated?: boolean;
    checksum?: string;
    game?: number | IGDBGame;
    game_localization?: number | IGDBGameLocalization;
    height?: number;
    image_id?: string;
    url?: string;
    width?: number;
}

export interface IGDBDateFormat {
    id: number;
    checksum?: string;
    created_at?: number;
    format?: string;
    updated_at?: number;
}

export interface IGDBEvent {
    id: number;
    checksum?: string;
    created_at?: number;
    description?: string;
    end_time?: number;
    event_logo?: number | IGDBEventLogo;
    event_networks?: number[] | IGDBEventNetwork[];
    games?: number[] | IGDBGame[];
    live_stream_url?: string;
    name?: string;
    slug?: string;
    start_time?: number;
    time_zone?: string;
    updated_at?: number;
    videos?: number[] | IGDBGameVideo[];
}

export interface IGDBEventLogo {
    id: number;
    alpha_channel?: boolean;
    animated?: boolean;
    checksum?: string;
    created_at?: number;
    event?: number | IGDBEvent;
    height?: number;
    image_id?: string;
    updated_at?: number;
    url?: string;
    width?: number;
}

export interface IGDBEventNetwork {
    id: number;
    checksum?: string;
    created_at?: number;
    event?: number | IGDBEvent;
    network_type?: number | IGDBNetworkType;
    updated_at?: number;
    url?: string;
}

export interface IGDBExternalGame {
    id: number;
    category?: IGDBExternalGameCategoryEnum;
    checksum?: string;
    countries?: number[];
    created_at?: number;
    external_game_source?: number | IGDBExternalGameSource;
    game?: number | IGDBGame;
    game_release_format?: number | IGDBGameReleaseFormat;
    media?: IGDBExternalGameMediaEnum;
    name?: string;
    platform?: number | IGDBPlatform;
    uid?: string;
    updated_at?: number;
    url?: string;
    year?: number;
}

export enum IGDBExternalGameCategoryEnum {
    steam = 1,
    gog = 5,
    youtube = 10,
    microsoft = 11,
    apple = 13,
    twitch = 14,
    android = 15,
    amazon_asin = 20,
    amazon_luna = 22,
    amazon_adg = 23,
    epic_game_store = 26,
    oculus = 28,
    utomik = 29,
    itch_io = 30,
    xbox_marketplace = 31,
    kartridge = 32,
    playstation_store_us = 36,
    focus_entertainment = 37,
    xbox_game_pass_ultimate_cloud = 54,
    gamejolt = 55,
}

export enum IGDBExternalGameMediaEnum {
    digital = 1,
    physical = 2,
}

export interface IGDBExternalGameSource {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    updated_at?: number;
}

export interface IGDBFranchise {
    id: number;
    checksum?: string;
    created_at?: number;
    games?: number[] | IGDBGame[];
    name?: string;
    slug?: string;
    updated_at?: number;
    url?: string;
}

export interface IGDBGame {
    id: number;
    age_ratings?: number[] | IGDBAgeRating[];
    aggregated_rating?: number;
    aggregated_rating_count?: number;
    alternative_names?: number[] | IGDBAlternativeName[];
    artworks?: number[] | IGDBArtwork[];
    bundles?: number[] | IGDBGame[];
    category?: IGDBGameCategoryEnum;
    checksum?: string;
    collection?: number | IGDBCollection;
    collections?: number[] | IGDBCollection[];
    cover?: number | IGDBCover;
    created_at?: number;
    dlcs?: number[] | IGDBGame[];
    expanded_games?: number[] | IGDBGame[];
    expansions?: number[] | IGDBGame[];
    external_games?: number[] | IGDBExternalGame[];
    first_release_date?: number;
    follows?: number;
    forks?: number[] | IGDBGame[];
    franchise?: number | IGDBFranchise;
    franchises?: number[] | IGDBFranchise[];
    game_engines?: number[] | IGDBGameEngine[];
    game_localizations?: number[] | IGDBGameLocalization[];
    game_modes?: number[] | IGDBGameMode[];
    game_status?: number | IGDBGameStatus;
    game_type?: number | IGDBGameType;
    genres?: number[] | IGDBGenre[];
    hypes?: number;
    involved_companies?: number[] | IGDBInvolvedCompany[];
    keywords?: number[] | IGDBKeyword[];
    language_supports?: number[] | IGDBLanguageSupport[];
    multiplayer_modes?: number[] | IGDBMultiplayerMode[];
    name?: string;
    parent_game?: number | IGDBGame;
    platforms?: number[] | IGDBPlatform[];
    player_perspectives?: number[] | IGDBPlayerPerspective[];
    ports?: number[] | IGDBGame[];
    rating?: number;
    rating_count?: number;
    release_dates?: number[] | IGDBReleaseDate[];
    remakes?: number[] | IGDBGame[];
    remasters?: number[] | IGDBGame[];
    screenshots?: number[] | IGDBScreenshot[];
    similar_games?: number[] | IGDBGame[];
    slug?: string;
    standalone_expansions?: number[] | IGDBGame[];
    status?: IGDBGameStatusEnum;
    storyline?: string;
    summary?: string;
    tags?: number[];
    themes?: number[] | IGDBTheme[];
    total_rating?: number;
    total_rating_count?: number;
    updated_at?: number;
    url?: string;
    version_parent?: number | IGDBGame;
    version_title?: string;
    videos?: number[] | IGDBGameVideo[];
    websites?: number[] | IGDBWebsite[];
}

export enum IGDBGameCategoryEnum {
    main_game = 0,
    dlc_addon = 1,
    expansion = 2,
    bundle = 3,
    standalone_expansion = 4,
    mod = 5,
    episode = 6,
    season = 7,
    remake = 8,
    remaster = 9,
    expanded_game = 10,
    port = 11,
    fork = 12,
    pack = 13,
    update = 14,
}

export enum IGDBGameStatusEnum {
    released = 0,
    alpha = 2,
    beta = 3,
    early_access = 4,
    offline = 5,
    cancelled = 6,
    rumored = 7,
    delisted = 8,
}

export interface IGDBGameEngine {
    id: number;
    checksum?: string;
    companies?: number[] | IGDBCompany[];
    created_at?: number;
    description?: string;
    logo?: number | IGDBGameEngineLogo;
    name?: string;
    platforms?: number[] | IGDBPlatform[];
    slug?: string;
    updated_at?: number;
    url?: string;
}

export interface IGDBGameEngineLogo {
    id: number;
    alpha_channel?: boolean;
    animated?: boolean;
    checksum?: string;
    height?: number;
    image_id?: string;
    url?: string;
    width?: number;
}

export interface IGDBGameLocalization {
    id: number;
    checksum?: string;
    cover?: number | IGDBCover;
    created_at?: number;
    game?: number | IGDBGame;
    name?: string;
    region?: number | IGDBRegion;
    updated_at?: number;
}

export interface IGDBGameMode {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    slug?: string;
    updated_at?: number;
    url?: string;
}

export interface IGDBGameReleaseFormat {
    id: number;
    checksum?: string;
    created_at?: number;
    format?: string;
    updated_at?: number;
}

export interface IGDBGameStatus {
    id: number;
    checksum?: string;
    created_at?: number;
    status?: string;
    updated_at?: number;
}

export interface IGDBGameTimeToBeat {
    id: number;
    checksum?: string;
    completely?: number;
    count?: number;
    created_at?: number;
    game_id?: number;
    hastily?: number;
    normally?: number;
    updated_at?: number;
}

export interface IGDBGameType {
    id: number;
    checksum?: string;
    created_at?: number;
    type?: string;
    updated_at?: number;
}

export interface IGDBGameVersion {
    id: number;
    checksum?: string;
    created_at?: number;
    features?: number[] | IGDBGameVersionFeature[];
    game?: number | IGDBGame;
    games?: number[] | IGDBGame[];
    updated_at?: number;
    url?: string;
}

export interface IGDBGameVersionFeature {
    id: number;
    category?: IGDBGameVersionFeatureCategoryEnum;
    checksum?: string;
    description?: string;
    position?: number;
    title?: string;
    values?: number[] | IGDBGameVersionFeatureValue[];
}

export enum IGDBGameVersionFeatureCategoryEnum {
    boolean = 0,
    description = 1,
}

export interface IGDBGameVersionFeatureValue {
    id: number;
    checksum?: string;
    game?: number | IGDBGame;
    game_feature?: number | IGDBGameVersionFeature;
    included_feature?: IGDBGameVersionFeatureValueIncludedFeatureEnum;
    note?: string;
}

export enum IGDBGameVersionFeatureValueIncludedFeatureEnum {
    NOT_INCLUDED = 0,
    INCLUDED = 1,
    PRE_ORDER_ONLY = 2,
}

export interface IGDBGameVideo {
    id: number;
    checksum?: string;
    game?: number | IGDBGame;
    name?: string;
    video_id?: string;
}

export interface IGDBGenre {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    slug?: string;
    updated_at?: number;
    url?: string;
}

export interface IGDBInvolvedCompany {
    id: number;
    checksum?: string;
    company?: number | IGDBCompany;
    created_at?: number;
    developer?: boolean;
    game?: number | IGDBGame;
    porting?: boolean;
    publisher?: boolean;
    supporting?: boolean;
    updated_at?: number;
}

export interface IGDBKeyword {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    slug?: string;
    updated_at?: number;
    url?: string;
}

export interface IGDBLanguage {
    id: number;
    checksum?: string;
    created_at?: number;
    locale?: string;
    name?: string;
    native_name?: string;
    updated_at?: number;
}

export interface IGDBLanguageSupport {
    id: number;
    checksum?: string;
    created_at?: number;
    game?: number | IGDBGame;
    language?: number | IGDBLanguage;
    language_support_type?: number | IGDBLanguageSupportType;
    updated_at?: number;
}

export interface IGDBLanguageSupportType {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    updated_at?: number;
}

export interface IGDBMultiplayerMode {
    id: number;
    campaigncoop?: boolean;
    checksum?: string;
    dropin?: boolean;
    game?: number | IGDBGame;
    lancoop?: boolean;
    offlinecoop?: boolean;
    offlinecoopmax?: number;
    offlinemax?: number;
    onlinecoop?: boolean;
    onlinecoopmax?: number;
    onlinemax?: number;
    platform?: number | IGDBPlatform;
    splitscreen?: boolean;
    splitscreenonline?: boolean;
}

export interface IGDBNetworkType {
    id: number;
    checksum?: string;
    created_at?: number;
    event_networks?: number[] | IGDBEventNetwork[];
    name?: string;
    updated_at?: number;
}

export interface IGDBPlatform {
    id: number;
    abbreviation?: string;
    alternative_name?: string;
    category?: IGDBPlatformCategoryEnum;
    checksum?: string;
    created_at?: number;
    generation?: number;
    name?: string;
    platform_family?: number | IGDBPlatformFamily;
    platform_logo?: number | IGDBPlatformLogo;
    platform_type?: number | IGDBPlatformType;
    slug?: string;
    summary?: string;
    updated_at?: number;
    url?: string;
    versions?: number[] | IGDBPlatformVersion[];
    websites?: number[] | IGDBPlatformWebsite[];
}

export enum IGDBPlatformCategoryEnum {
    console = 1,
    arcade = 2,
    platform = 3,
    operating_system = 4,
    portable_console = 5,
    computer = 6,
}

export interface IGDBPlatformFamily {
    id: number;
    checksum?: string;
    name?: string;
    slug?: string;
}

export interface IGDBPlatformLogo {
    id: number;
    alpha_channel?: boolean;
    animated?: boolean;
    checksum?: string;
    height?: number;
    image_id?: string;
    url?: string;
    width?: number;
}

export interface IGDBPlatformType {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    updated_at?: number;
}

export interface IGDBPlatformVersion {
    id: number;
    checksum?: string;
    companies?: number[] | IGDBPlatformVersionCompany[];
    connectivity?: string;
    cpu?: string;
    graphics?: string;
    main_manufacturer?: number | IGDBPlatformVersionCompany;
    media?: string;
    memory?: string;
    name?: string;
    os?: string;
    output?: string;
    platform_logo?: number | IGDBPlatformLogo;
    platform_version_release_dates?: number[] | IGDBPlatformVersionReleaseDate[];
    resolutions?: string;
    slug?: string;
    sound?: string;
    storage?: string;
    summary?: string;
    url?: string;
}

export interface IGDBPlatformVersionCompany {
    id: number;
    checksum?: string;
    comment?: string;
    company?: number | IGDBCompany;
    developer?: boolean;
    manufacturer?: boolean;
}

export interface IGDBPlatformWebsite {
    id: number;
    category?: IGDBPlatformWebsiteCategoryEnum;
    checksum?: string;
    trusted?: boolean;
    url?: string;
}

export enum IGDBPlatformWebsiteCategoryEnum {
    official = 1,
    wikia = 2,
    wikipedia = 3,
    facebook = 4,
    twitter = 5,
    twitch = 6,
    instagram = 8,
    youtube = 9,
    iphone = 10,
    ipad = 11,
    android = 12,
    steam = 13,
    reddit = 14,
    discord = 15,
    google_plus = 16,
    tumblr = 17,
    linkedin = 18,
    pinterest = 19,
    soundcloud = 20,
}

export interface IGDBPlatformVersionReleaseDate {
    id: number;
    category?: IGDBPlatformVersionReleaseDateCategoryEnum;
    checksum?: string;
    created_at?: number;
    date?: number;
    date_format?: number | IGDBDateFormat;
    human?: string;
    m?: number;
    platform_version?: number | IGDBPlatformVersion;
    region?: IGDBPlatformVersionReleaseDateRegionEnum;
    release_region?: number | IGDBReleaseDateRegion;
    updated_at?: number;
    y?: number;
}

export enum IGDBPlatformVersionReleaseDateCategoryEnum {
    YYYYMMMMDD = 0,
    YYYYMMMM = 1,
    YYYY = 2,
    YYYYQ1 = 3,
    YYYYQ2 = 4,
    YYYYQ3 = 5,
    YYYYQ4 = 6,
    TBD = 7,
}

export enum IGDBPlatformVersionReleaseDateRegionEnum {
    europe = 1,
    north_america = 2,
    australia = 3,
    new_zealand = 4,
    japan = 5,
    china = 6,
    asia = 7,
    worldwide = 8,
    korea = 9,
    brazil = 10,
}

export interface IGDBPlayerPerspective {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    slug?: string;
    updated_at?: number;
    url?: string;
}

export interface IGDBPopularityPrimitive {
    id: number;
    calculated_at?: number;
    checksum?: string;
    created_at?: number;
    external_popularity_source?: number | IGDBExternalGameSource;
    game_id?: number;
    popularity_source?: IGDBPopularityPrimitivePopularitySourceEnum;
    popularity_type?: number | IGDBPopularityType;
    updated_at?: number;
    value?: number;
}

export enum IGDBPopularityPrimitivePopularitySourceEnum {
    igdb = 121,
}

export interface IGDBPopularityType {
    id: number;
    checksum?: string;
    created_at?: number;
    external_popularity_source?: number | IGDBExternalGameSource;
    name?: string;
    popularity_source?: IGDBPopularityTypePopularitySourceEnum;
    updated_at?: number;
}

export enum IGDBPopularityTypePopularitySourceEnum {
    steam = 1,
    igdb = 121,
}

export interface IGDBRegion {
    id: number;
    category?: string;
    checksum?: string;
    created_at?: number;
    identifier?: string;
    name?: string;
    updated_at?: number;
}

export interface IGDBReleaseDate {
    id: number;
    category?: IGDBReleaseDateCategoryEnum;
    checksum?: string;
    created_at?: number;
    date?: number;
    date_format?: number | IGDBDateFormat;
    game?: number | IGDBGame;
    human?: string;
    m?: number;
    platform?: number | IGDBPlatform;
    region?: IGDBReleaseDateRegionEnum;
    release_region?: number | IGDBReleaseDateRegion;
    status?: number | IGDBReleaseDateStatus;
    updated_at?: number;
    y?: number;
}

export enum IGDBReleaseDateCategoryEnum {
    YYYYMMMMDD = 0,
    YYYYMMMM = 1,
    YYYY = 2,
    YYYYQ1 = 3,
    YYYYQ2 = 4,
    YYYYQ3 = 5,
    YYYYQ4 = 6,
    TBD = 7,
}

export enum IGDBReleaseDateRegionEnum {
    europe = 1,
    north_america = 2,
    australia = 3,
    new_zealand = 4,
    japan = 5,
    china = 6,
    asia = 7,
    worldwide = 8,
    korea = 9,
    brazil = 10,
}

export interface IGDBReleaseDateRegion {
    id: number;
    checksum?: string;
    created_at?: number;
    region?: string;
    updated_at?: number;
}

export interface IGDBReleaseDateStatus {
    id: number;
    checksum?: string;
    created_at?: number;
    description?: string;
    name?: string;
    updated_at?: number;
}

export interface IGDBScreenshot {
    id: number;
    alpha_channel?: boolean;
    animated?: boolean;
    checksum?: string;
    game?: number | IGDBGame;
    height?: number;
    image_id?: string;
    url?: string;
    width?: number;
}

export interface IGDBSearch {
    id: number;
    alternative_name?: string;
    character?: number | IGDBCharacter;
    checksum?: string;
    collection?: number | IGDBCollection;
    company?: number | IGDBCompany;
    description?: string;
    game?: number | IGDBGame;
    name?: string;
    platform?: number | IGDBPlatform;
    published_at?: number;
    test_dummy?: unknown;
    theme?: number | IGDBTheme;
}

export interface IGDBTheme {
    id: number;
    checksum?: string;
    created_at?: number;
    name?: string;
    slug?: string;
    updated_at?: number;
    url?: string;
}

export interface IGDBWebsite {
    id: number;
    category?: IGDBWebsiteCategoryEnum;
    checksum?: string;
    game?: number | IGDBGame;
    trusted?: boolean;
    type?: number | IGDBWebsiteType;
    url?: string;
}

export enum IGDBWebsiteCategoryEnum {
    official = 1,
    wikia = 2,
    wikipedia = 3,
    facebook = 4,
    twitter = 5,
    twitch = 6,
    instagram = 8,
    youtube = 9,
    iphone = 10,
    ipad = 11,
    android = 12,
    steam = 13,
    reddit = 14,
    itch = 15,
    epicgames = 16,
    gog = 17,
    discord = 18,
    bluesky = 19,
}

export interface IGDBWebsiteType {
    id: number;
    checksum?: string;
    created_at?: number;
    type?: string;
    updated_at?: number;
}
