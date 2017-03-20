export const UI_LOADED = 'UI_LOADED';

export function setUILoaded() {
  return {
    type: UI_LOADED,
    loaded: true
  }
}
