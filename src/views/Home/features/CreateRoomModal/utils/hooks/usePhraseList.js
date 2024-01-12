import { useState } from "react";

const usePhraseList = () => {
    const [phraseList, setPhraseList] = useState(Array(10).fill(0).map((_, idx) => `Item ${idx}`));
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
    return {
        value: phraseList,
        add, remove, 
        isEmpty, isNew
    };
}	
    
export default usePhraseList;