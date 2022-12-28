import GetCharactersDatasource from '../../data/datasources/get-characters-datasource';
import GetCharactersDatasourceRemote from '../../data/datasources/remote/get-characters-datasource-remote';
import GetCharactersAbstractRepositoryImpl from '../../data/repositories/get-characters-repository-impl';
import GetCharactersAbstractRepository from '../../domain/abstract-repositories/get-characters-abstract-repository';
import { CharactersFilterEntity } from '../../domain/entities/characters-filter-entity';
import { GetCharactersUsecase } from '../../domain/usecases/get-characters-usecase';


const getCharactersDataSource: GetCharactersDatasource = new GetCharactersDatasourceRemote();
const getCharactersRepository: GetCharactersAbstractRepository = new GetCharactersAbstractRepositoryImpl(getCharactersDataSource);
const getCharactersUsecase: GetCharactersUsecase = new GetCharactersUsecase(getCharactersRepository);


export const getCharactersList = async (charactersFilter: CharactersFilterEntity) => {
    try {
        let data  = await getCharactersUsecase.getCharacters(charactersFilter);

        return data;
    } catch (error) {
        throw new Error('');
    }
}
