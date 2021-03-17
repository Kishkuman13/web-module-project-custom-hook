import { useLocalStorage } from './useLocalStorage'

export const useDarkMode = (key, initialValue) => {
	const [darkMode, setDarkMode] = useLocalStorage()

	const setValue = value => {
		setDarkMode(value)
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	return [darkMode, setValue]
}