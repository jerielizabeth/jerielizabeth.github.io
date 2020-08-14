# Adventures in READMEs 

**tl;dr**: Read the README.

In an effort to document the wordlists that I am using to verfiy the OCR quality of my periodical corpus, I went diving today into the README files. My first choice of wordlist was the NLTK words.words list, as this is a standard word bank used in many projects. Turns out that the standard NLTK wordlist is none other than the list provided by default on UNIX system. (https://en.wikipedia.org/wiki/Words_(Unix)). So, where do those words come from? Thankfully, the directory where these words are included (/usr/dict/words) also has a README, where I learned that this word list is from the Webster's Second International Dictionary, published in 1934. Copyright strikes again, it appears, as this dictionary is used because the copyright has lapsed.

One challenge with using this wordlist for finding OCR errors is that this list include each letter as a "word", thus running the risk of hiding a fair amount of OCR noise within the documents. 