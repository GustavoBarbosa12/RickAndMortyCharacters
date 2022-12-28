import { CharacterEntity } from "./character-entity"

export interface CharactersListEntity {
    info: {
        pages: number
    },
    results: CharacterEntity[];
}