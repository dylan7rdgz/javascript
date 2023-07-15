console.log("Uppercase have lower value than Lowercase letters in ASCII specs: ",
     "Zoo" < "aardvark");


console.log("Explicit conversion: ", 
    "Zoo".toLocaleLowerCase() < "aardvark".toLocaleLowerCase());

console.log("Using localeCompare", "aardvark".localeCompare("Zoo"));

// see Intl.Collator

// < converts types to numbers as opposed to + which converts types to strings