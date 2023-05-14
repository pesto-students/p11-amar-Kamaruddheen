function calcWordFrequencies() {
    
    var sentence = prompt("Enter a sentence : ")
    // "hey hi Mark hi mark"

    const words_frequencies = new Map();

    sentence.split(" ").forEach(element => {

        // Existing Word
        if (words_frequencies.has(element)) {            
            words_frequencies.set(element, words_frequencies.get(element) + 1)
        }
        // New Words
        else {
            
            words_frequencies.set(element, 1)
        }
    });

    console.log(words_frequencies);
}

calcWordFrequencies()