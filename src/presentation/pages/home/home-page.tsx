import { useEffect } from 'react';
import { CharactersListFilter } from '../../components/characters-list-filter/characters-list-filter';
import { CharactersListItem } from '../../components/characters-list-item/characters-list-item';
import { useCharactersContext } from '../../context/characters-context';
import { CharactersActions } from '../../context/types/characters-context-types';
import * as GetCharactersService from '../../../infra/services/get-characters-service';
import * as C from './home-page-styles';
import { CharactersListPagination } from '../../components/characters-list-pagination/characters-list-pagination';

export const HomePage = () => {

    const { state, dispatch } = useCharactersContext();

    useEffect(() => {
        let filter = {...state.charactersFilter};
        filter.page = state.charactersListPage;

        const setCharactersList = async () => {
                dispatch({
                    type: CharactersActions.setCharactersList,
                    payload: await GetCharactersService.getCharactersList(filter)
                })
        }
        setCharactersList();
    },[dispatch, state.charactersFilter, state.charactersListPage]);



    return(
        <C.Container>
            <C.Header>
                <h1>Rick and Morty Characters</h1>
            </C.Header>
            <C.Body>
            <CharactersListFilter />
            { state.charactersList.results[0] ?
                <C.CharactersList>
                {
                    state.charactersList.results.map((item, index)=>(
                        <CharactersListItem
                            key={index}
                            id={item.id} 
                            name={item.name}
                            status={item.status}
                            gender={item.gender}
                            specie={item.specie}
                            origin={item.origin}
                            location={item.location}
                            img={item.img}
                        />
                    ))  
                }
                </C.CharactersList>
                : <C.InfoContainer>No characters</C.InfoContainer>
            }
            </C.Body>

            <C.Footer>
                <CharactersListPagination />

                <div>API: https://rickandmortyapi.com/ - Implemented by: Gustavo Barbosa</div>
            </C.Footer>
        </C.Container>
    )

}