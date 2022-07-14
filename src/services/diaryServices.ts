import { DiaryEntry,NewDiaryEntry,NonSensitiveInfoDiaryEntry} from '../types';
import diaryData from './diaries.json';

const diaries:Array<DiaryEntry> = diaryData as Array<DiaryEntry>;

export const getEntries=():DiaryEntry[]=>diaries;

export const findById=(id:number):NonSensitiveInfoDiaryEntry|undefined=>{
    const entry=diaries.find(d=>d.id===id);
    if(entry !=null){
        const {comment,...restOfDiary}=entry;
        return restOfDiary;
    }

    return undefined
}

export const getEntriesWithSensitiveInfo=():NonSensitiveInfoDiaryEntry[]=>{
    return diaries.map(({id,date,weather,visibility})=>({id,date,weather,visibility}));
};

export const addDiary=(newDiaryEntry:NewDiaryEntry):DiaryEntry=>{
    const newDiary={
        id:diaries.length+1,
        ...newDiaryEntry
    }
    diaries.push(newDiary);
    return newDiary;
};
