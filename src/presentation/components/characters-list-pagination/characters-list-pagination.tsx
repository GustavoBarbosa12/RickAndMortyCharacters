import { useCharactersContext } from '../../context/characters-context';
import { CharactersActions } from '../../context/types/characters-context-types';
import  * as C from './characters-list-pagination-styles';

export const CharactersListPagination = () => {
    const { state, dispatch } = useCharactersContext();
    let currentPage = 1;

    const handleSetNextPage = () =>{
        if(calcNext()){
            currentPage = state.charactersListPage;
            currentPage ++;
    
            dispatch({
                type: CharactersActions.setCharactersListPage,
                payload: currentPage
            });

            window.scrollTo(0, 10);
        }
    }

    const handleSetPrevPage = () =>{
        if(calcPrev()){
            currentPage = state.charactersListPage;
            currentPage --;
    
            dispatch({
                type: CharactersActions.setCharactersListPage,
                payload: currentPage
            });

            window.scrollTo(0, 10);
        }
    }

    const calcNext = () => state.charactersList.info.pages > state.charactersListPage;
    const calcPrev = () => state.charactersListPage > 1;


    return (
        <C.Container>
            {calcPrev() && <C.Direction onClick={handleSetPrevPage}>{"<-- "}prev</C.Direction>}
            <C.Indicator> {state.charactersListPage}/{state.charactersList.info.pages}</C.Indicator>
            {calcNext() && <C.Direction onClick={handleSetNextPage}>next{" -->"}</C.Direction>}
        </C.Container>
    )
}