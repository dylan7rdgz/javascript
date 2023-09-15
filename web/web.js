/*


    async modules

    regular scripts

    module scripts


    HTML Document 
    URL Containing the HTML Document <-------- Can load module scripts from the same origin
                                        OR
                                        (cors headers to securely allow cross origin loads)
                                     <--------          ______________
                                                        |
                                                        |   Server
                                                        |

                    Testing ES6 modules in Development mode 
                        - This might be a challenge due to the tightening up of modules from loading scripts from anywhere on the net.  
                        - Creating a static web server might be helpful to test ES6 Modules
                                                        

                    _________________________________________
                    |                                       | 
                    | INTERNET INFRA                        |
                    | [Advertising, Tracking, Tracking code]|  
                    |                                       |
                    _________________________________________




    On the web, code has to be transferred over a network instead of
    being read from the filesystem. And once transferred, the code is often
    executed on mobile devices with relatively slow CPU's. This is not the
    kind of environment where static module imports - which require an entire
    program to be loaded before any of it runs - make a lot of sense


    import.meta.url.
    Within an ES6 module (but not within a regular <script> or a Node module loaded with require()),
    the special syntax import.meta refers to an object that contains metadata about the currently executinf module
    The url property of this object is the URL from which the current module was loaded. (In Node, this will be a file://URL)

    The primary use case of import.meta.url is to be able to refer to 
    images, data files or other resources that are stored in the same directory
    as (or relative to) the module.
    The URL() constructor makes it easy to resolve a relative URL against an absolute
    like import.meta.url

*/

function localStringsURL(locale) {
    return new URL(`l10/${locale}.json`, import.meta.url);
}