//它不是页面，它只是一本“发音小字典”：给每个假名 id 配一条发音说明。

export type PronunciationGuide={
     kana: string;
 nihonShikiRomaji: string;
hepburnRomaji: string;
  mouthImageSrc: string | null;
  pronunciationTip: string;
   strokeHint:string;
  strokeHintImageSrc: string | null;

};

export const pronunciationGuides:Record<string,PronunciationGuide> = {
    "hiragana-a":{
        kana:"あ",
       nihonShikiRomaji:"a",
       hepburnRomaji:"a",
       mouthImageSrc: null,
        pronunciationTip:"The Japanese u sound is short and gentle. Do not round your lips too strongly.",
        strokeHint:"Notice the small top stroke and the lower curve.",
strokeHintImageSrc:null,
    },
    
  "hiragana-i":{
        kana:"い",
       nihonShikiRomaji:"i",
       hepburnRomaji:"i",
       mouthImageSrc: null,
        pronunciationTip:"The Japanese u sound is short and gentle. Do not round your lips too strongly.",
        strokeHint:"Notice the small top stroke and the lower curve.",
strokeHintImageSrc:null,
    },
    


    "hiragana-u":{
        kana:"う",
       nihonShikiRomaji:"u",
       hepburnRomaji:"u",
       mouthImageSrc: "/images/pronunciation/hiragana-u-mouth.jpg",
        pronunciationTip:"The Japanese u sound is short and gentle. Do not round your lips too strongly.",
        strokeHint:"Notice the small top stroke and the lower curve.",
strokeHintImageSrc:"/images/pronunciation/hiragana-u-stroke.jpg",
    },

      "hiragana-e":{
        kana:"え",
       nihonShikiRomaji:"e",
       hepburnRomaji:"e",
       mouthImageSrc: null,
        pronunciationTip:"The Japanese u sound is short and gentle. Do not round your lips too strongly.",
        strokeHint:"Notice the small top stroke and the lower curve.",
strokeHintImageSrc:null,
    },
      "hiragana-o":{
        kana:"お",
       nihonShikiRomaji:"o",
       hepburnRomaji:"o",
       mouthImageSrc: null,
        pronunciationTip:"The Japanese u sound is short and gentle. Do not round your lips too strongly.",
        strokeHint:"Notice the small top stroke and the lower curve.",
strokeHintImageSrc:null,
    },
    
    
};