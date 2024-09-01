const {createContext, useState,useEffect} =require('react');

const themeContext=createContext();
const THEME_KEY='theme';

function ThemeProvider({children}){

    const [dark,setDark]=useState(false);

    const saveThemeToLocalStorage=(theme)=>{
        localStorage.setItem(THEME_KEY,JSON.stringify(theme));
    }

    useEffect(()=>{
        const savedTheme=JSON.parse(localStorage.getItem(THEME_KEY));
        if(savedTheme!=null){
            setDark(savedTheme);
            return ;
        }

        const isSystemThemeDark=window.matchMedia(
            '(prefers-color-scheme:dark)'
        ).matches;
        setDark(isSystemThemeDark===true);

        console.log(isSystemThemeDark);
    },[]);

    return <themeContext.Provider value={{dark,setDark,saveThemeToLocalStorage}}>
        {children}
        </themeContext.Provider>
}

export {ThemeProvider};
export default themeContext