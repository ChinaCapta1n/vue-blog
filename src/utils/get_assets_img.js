export const getAssetUrl = image => {
    return new URL(`../assets/images/${image}`, import.meta.url).href;
}