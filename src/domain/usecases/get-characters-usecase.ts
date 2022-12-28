import GetCharactersAbstractRepository from "../abstract-repositories/get-characters-abstract-repository";
import { CharactersFilterEntity } from "../entities/characters-filter-entity";
import { CharactersListEntity } from "../entities/characters-list-entity";

export class GetCharactersUsecase {
    getCharactersAbstractRepository: GetCharactersAbstractRepository;

    constructor(_getCharactersAbstractRepository: GetCharactersAbstractRepository){
        this.getCharactersAbstractRepository = _getCharactersAbstractRepository;
    }

    getCharacters(charactersFilter: CharactersFilterEntity): Promise<CharactersListEntity> {
        
        return this.getCharactersAbstractRepository.getCharacters(charactersFilter);
    }
}