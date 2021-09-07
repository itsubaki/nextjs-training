import { Languages } from 'models/language'
import style from 'styles/profile/language.module.css'

export function Color(language: string) {
    switch (language) {
        case "C":
            return <span key={language} className={style.c_color}></span>
        case "Go":
            return <span key={language} className={style.go_color}></span>
        case "Java":
            return <span key={language} className={style.java_color}></span>
        case "Scala":
            return <span key={language} className={style.scala_color}></span>
        case "Elixir":
            return <span key={language} className={style.elixir_color}></span>
        case "JavaScript":
            return <span key={language} className={style.js_color}></span>
        case "TypeScript":
            return <span key={language} className={style.ts_color}></span>
        case "HCL":
            return <span key={language} className={style.hcl_color}></span>
        case "Gherkin":
            return <span key={language} className={style.gherkin_color}></span>
        case "Shell":
            return <span key={language} className={style.shell_color}></span>
        case "Makefile":
            return <span key={language} className={style.makefile_color}></span>
        case "CMake":
            return <span key={language} className={style.cmake_color}></span>
        case "HTML":
            return <span key={language} className={style.html_color}></span>
        case "CSS":
            return <span key={language} className={style.css_color}></span>
        case "Python":
            return <span key={language} className={style.python_color}></span>
        case "OpenQASM":
            return <span key={language} className={style.openqasm_color}></span>
        case "Other":
            return <span key={language} className={style.other_color}></span>
        default:
            return <span key={language} className={style.other_color}></span>
    }
}

export function Usage(lang: Languages) {
    let sum: number = 0
    for (const key in lang) {
        sum = sum + lang[key];
    }

    const list: any = []
    for (const key in lang) {
        const value: number = (lang[key] / sum * 100)
        list.push(
            <span key={key}>{Color(key)}{" "}{key}{" "}{Math.round(value * 10) / 10}{"%"}{" "}</span>
        )
    }

    return (
        <span>
            {list}
        </span>
    )
}
