# 📦 React Native Snippet by Kuldeep

A powerful and time-saving **VS Code snippet extension** for React Native developers. Whether you're building UI components, wiring up Redux Toolkit, or structuring your app’s navigation, this extension speeds up repetitive coding with rich, customizable snippets.

---

## 🚀 Features

- ✅ React Native component templates
- ✅ Styled custom UI components (`Text`, `Input`, `Button`, `Loader`)
- ✅ Frequently used React hooks (`useEffect`, `useState`, `useCallback`, etc.)
- ✅ Redux Toolkit slice and store boilerplate
- ✅ Custom reusable hooks and selectors
- ✅ Bottom tab navigator with badge support
- ✅ TypeScript support built-in

---

## 📚 Snippet Index

| Prefix         | Description                                                                 |
|----------------|-----------------------------------------------------------------------------|
| `ir`           | Import `React` with `useEffect`                                             |
| `irn`          | Import `View`, `Text`, `StyleSheet` from React Native                       |
| `istyle`       | Create an empty `StyleSheet.create()` block                                 |
| `ifunction`    | Functional component with default styles and text                           |
| `ius`          | `useState()` hook with setter only                                          |
| `iue`          | `useEffect()` with cleanup                                                  |
| `iucb`         | `useCallback()` hook template                                               |
| `ium`          | `useMemo()` hook template                                                   |
| `iur`          | `useRef()` hook or `useReducer()` hook (based on context)                   |
| `iuc`          | `useContext()` hook                                                         |
| `itext`        | Custom `Text` component with `value` and `style` props                      |
| `iloader`      | Custom `Loader` with `size`, `color`, and `visible` props                   |
| `ibutton`      | Button with `isLoading` state and `type` (filled/hollow)                    |
| `iinput`       | Reusable styled `TextInput` component                                       |
| `islice`       | Redux Toolkit slice with `increment`, `decrement`, `setValue`               |
| `istore`       | Redux Toolkit store with multiple slices + type exports                     |
| `idebounce`    | Custom `useDebouncedCallback` hook with types                               |
| `ibottomtab`   | Bottom tab navigator setup with badge example                               |
| `iuseselector` | Custom Redux hook using `useSelector` with comments                         |

---

## ✍️ How to Use

1. **Install** the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/).
2. Open a `.tsx` or `.js` file.
3. Type the prefix (e.g. `ibutton`) and press `Tab` or `Enter` to expand.
4. Customize any placeholder values as per your component/slice logic.

---

## 💡 Pro Tip

Want both JS and TS variations for components? You can create **two sets of snippets** and use:
- `ibuttonjs` for JavaScript
- `ibuttonts` for TypeScript

---

## 🛠 Customize or Contribute

Feel free to open the `.code-snippets` file and:
- Modify existing snippets
- Add your own
- Fork and contribute more reusable patterns for the community!

---

## 📸 Extension Preview

Supports:
- ✅ Rich IntelliSense with tab-completion
- ✅ Easy readability with commented placeholders
- ✅ Typescript-first mindset for scalable React Native apps

---

## 🙌 Created by Kuldeep

Passionate about React Native, clean code, and developer productivity.

Have suggestions or want to add more patterns? Reach out or contribute on GitHub.
