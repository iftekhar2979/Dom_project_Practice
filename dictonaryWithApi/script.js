// seleciton part
const wrapper=document.querySelector(".wrapper")
searchInput=wrapper.querySelector('input')
volume=wrapper.querySelector('.letter  i')
text=wrapper.querySelector('.synonyms .list')
removeIcon=wrapper.querySelector('.input-search span')
// console.log(removeIcon)
let audio;
function data(result,word){
    if(result.title){
        text.innerHTML=`Can't find the meaning  of <span>"${letter}</span">.please,try to search another word`
    }else{
        wrapper.classList.add("active")
        let definitions=result[0].meanings[0].definitions[0]
        phonetics=`${result[0].meanings[0].partOfSpeech}/${result[0].phonetics[0].text}/`;
        document.querySelector('.letter p').innerHTML=phonetics;
        document.querySelector('.letter span').innerHTML=definitions.definition;
        document.querySelector('.meaning span').innerHTML=definitions.example;
        audio =new Audio("https:"+result[0].phonetics[0].audio);

        // if(definitions.synonyms[0]==undefined){
        //     synonyms.parentElement.style.display='none';
        // }else{
        //     synonyms.parentElement.style.display='block';
        //     synonyms.innerHTML="";
        //     for(let i=0; i<5; i++){
        //         let tag =`<span onclick="search('${definitions.synonyms[i]}')>${definitions.synonyms[i]},</span>" `;
        //         tag=i==4? tag=`<span onclick="search('${definitions.synonyms[i]}')">${definitions.synonyms[4]}</span> : tag `
        //         //  synonyms.insertAdjacentHTML("beforeend",tag);
        //     // }
        // }

    }
}
function search(word){
    fetchApi(word)
    searchInput.value=word;
}

function fetchApi(word){
    wrapper.classList.remove('active')
    text.style.color='#000';
    text.innerHTML=`Searching the Meaning of <span>"${word}"</span>`
    let url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    fetch(url)
    .then(res=>res.json())
    .then(result=> data(result))
    .catch(()=>{
        text.innerHTML=`Can't find the meaning of <span>"${word}"</span>.Please try to search for another Word`
    })
}
searchInput.addEventListener('keyup' ,(e)=>{
    let word=e.target.value.replace(/\s+/g,' ')
    if(e.key=="Enter" && word){
        fetchApi(word)
    }
})

volume.addEventListener("click",()=>{
    volume.style.color="#4D59FB"
    audio.play();
    setTimeout(()=>{
        volume.style.color="#999"
    },800)
});
removeIcon.addEventListener("click",()=>{
    searchInput.value="";
    searchInput.focus();
    wrapper.classList.remove("active");
    text.style.color='#9A9A9A';
    text.innerHTML='Type any Exiting word and press enter to get meaning,example,synonyms, etc'
})
