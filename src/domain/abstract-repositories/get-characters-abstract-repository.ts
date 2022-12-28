import { CharactersFilterEntity } from "../entities/characters-filter-entity";
import { CharactersListEntity } from "../entities/characters-list-entity";

export default interface GetCharactersAbstractRepository {
    getCharacters(charactersFilter: CharactersFilterEntity): Promise<CharactersListEntity>
}