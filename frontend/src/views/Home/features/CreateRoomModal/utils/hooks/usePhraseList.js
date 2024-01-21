import { useState } from "react";

const usePhraseList = () => {
    const [phraseList, setPhraseList] = useState([]);
    const add = newPhrase => {
        setPhraseList(prev => ([
            ...prev,
            newPhrase
        ]));
    }
    const remove = phraseToRemove => {
        setPhraseList(prev => prev.filter(phrase => phrase !== phraseToRemove));
    }
    const isEmpty = () => phraseList.length === 0;
    const isNew = newPhrase => {
        return !phraseList.some(phrase => phrase === newPhrase);
    };
    const clear = () => {
        setPhraseList([]);
    }
    return {
        value: phraseList,
        add, remove, 
        isEmpty, isNew, clear
    };
}	
    
export default usePhraseList;