function checkPalindrome(N, str) {
    let str2="";
    
    for(let i=N-1;i>=0;i--){
       str2=str2+str[i];
    } 
    // console.log(str2);
    if(str==str2){
        console.log("Yes");
    }
    else{
        console.log("No");
    }
}