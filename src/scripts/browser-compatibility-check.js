const rawUserAgentString = window.navigator.userAgent;

function extractData(userAgentString){
    let bracketsString = "";

    // Getting string from brackets
    let brackets = [userAgentString.indexOf("(") + 1, userAgentString.indexOf(")")];
    bracketsString = userAgentString.substring(brackets[0], brackets[1]);

    
    let browserName;
    let browserVersion;
    let os;

    return [browserName, browserVersion, os];
}

extractData(rawUserAgentString);