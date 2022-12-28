import { CharacterEntityRemote } from "./character-entity-remote"

export interface GetCharactersEntityRemote {
    info: {
      count?: number,
      pages: number,
      next?: string,
      prev?: string
    },
    results: CharacterEntityRemote[]
  }