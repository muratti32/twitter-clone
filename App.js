import React,{useState} from 'react'
import { StyleSheet } from 'react-native'
import {NavigationContainer,DarkTheme,DefaultTheme} from '@react-navigation/native'

import {DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme, 
  Provider as PaperProvider} from 'react-native-paper'

  import DrawerNavigation from './screens/components/DrawerNavigation'

  const defaultTheme =  {
    ...DefaultTheme,
    ...PaperDefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      ...PaperDefaultTheme.colors,
    },
  }

  const darkTheme =  {
    ...DarkTheme,
    ...PaperDarkTheme,
    colors: {
        ...DarkTheme.colors,
        ...PaperDarkTheme.colors
    },
  }
  
  
const App = () => {

  const [isDarkTheme,setIsDarkTheme] = useState(true)

  const theme = isDarkTheme ? darkTheme : defaultTheme

  const toggleTheme = () => {
    console.log("haloo")
    setIsDarkTheme(isDark => !isDark)
  }
  
  return (
    <PaperProvider theme={theme}> 
        <NavigationContainer theme={theme}> 
            <DrawerNavigation toggleTheme={toggleTheme}/>
        </NavigationContainer>
    </PaperProvider>
    
  )
}

export default App

const styles = StyleSheet.create({})
