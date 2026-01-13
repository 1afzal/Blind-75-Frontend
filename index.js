function search(query){
    console.log(`Searching: ${query}`)
}

function debounce(func,delay){
    let timeout;
    return function(...args){
        clearTimeout(timeout)
        timeout = setTimeout(()=>{
            func.apply(this,args)
        },delay)
    }
}

const debouncedSearch = debounce(search,1000);

debouncedSearch("Who is ")
debouncedSearch("Who is Elon")
debouncedSearch("Who is Elon Musk")
