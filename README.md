
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


Here’s a list of all available snippets and the code that gets expanded when using each shortcut.

### 1. `ir` – **Import React with useEffect**
```javascript
import React, { useEffect } from 'react';
```

### 2. `irn` – **Import React Native Core Components**
```javascript
import { View, StyleSheet, Text } from 'react-native';
```

### 3. `istyle` – **Empty StyleSheet**
```javascript
const styles = StyleSheet.create({
  // Add your styles here
});
```

### 4. `ifunction` – **React Native App Component**
```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <Text>Hello, this is a React Native component!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyComponent;
```

### 5. `ius` – **useState Hook**
```javascript
const [, set] = useState();
```

### 6. `iue` – **useEffect Hook**
```javascript
useEffect(() => {
    // Your effect logic here

    return () => {
        // Clean up logic here
    };
}, []);
```

### 7. `iucb` – **useCallback Hook**
```javascript
const memoizedCallback = useCallback(() => {
    // Callback logic here
}, []);
```

### 8. `iur` – **useRef Hook**
```javascript
const myRef = useRef();
```

### 9. `ium` – **useMemo Hook**
```javascript
const memoizedValue = useMemo(() => {
    // Your memoized value logic here
}, []);
```

### 10. `iuc` – **useContext Hook**
```javascript
const contextValue = useContext(MyContext);
```

### 11. `iur` – **useReducer Hook**
```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

### 12. `itext` – **Custom Text Component**
```javascript
import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

interface MyTextProps extends TextProps {
  value: string;
  style?: TextStyle | TextStyle[];
}

function MyTextComp(props: MyTextProps): React.JSX.Element {
  const {value, style, ...rest} = props;
  return (
    <Text style={[styles.container, style]} {...rest}>
      {value}
    </Text>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 16,
  },
});

export default MyTextComp;
```

### 13. `iloader` – **Custom Loader Component**
```javascript
import React from 'react';
import { ActivityIndicator } from 'react-native';

interface LoaderProps {
  size?: 'small' | 'large';  // Optional size prop for customizing the loader size
  color?: string;            // Optional color prop for customizing the loader color
  visible?: boolean;         // Optional visible prop to control loader visibility
}

const Loader: React.FC<LoaderProps> = ({ size = 'small', color = 'red', visible = true }) => {
  if (!visible) return null;  // If loader is not visible, return nothing

  return <ActivityIndicator size={size} color={color} />;
};

export default Loader;
```

### 14. `islice` – **Redux Toolkit Slice**
```javascript
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DummyState {
  value: number;
}

const initialState: DummyState = {
  value: 0,
};

const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setValue } = dummySlice.actions;

export default dummySlice.reducer;
```

### 15. `istore` – **Redux Toolkit Store Configuration**
```javascript
import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice';
import filtersReducer from '../features/filters/filtersSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    filters: filtersReducer,
  },
});

// Optional: export RootState and AppDispatch types for use throughout the app
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### 16. `idebounce` – **useDebouncedCallback Hook**
```javascript
import React, { useRef } from 'react';

type DebouncedFunction<T extends (...args: any[]) => void> = (
  ...args: Parameters<T>
) => void;

const useDebouncedCallback = <T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): DebouncedFunction<T> => {
  const timeoutRef = useRef<number | null>(null);

  const debouncedFunction: DebouncedFunction<T> = (...args) => {
    if (timeoutRef.current !== null) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay) as unknown as number;
  };

  return debouncedFunction;
};

export default useDebouncedCallback;
```

### 17. `ibutton` – **Reusable Button Component**
```javascript
import React from 'react';
import { StyleSheet, Pressable, PressableProps, Text, ActivityIndicator } from 'react-native';

interface ButtonProps extends PressableProps {
  title: string;
  isLoading?: boolean;
  type?: 'hollow' | 'filled';
}

function MyButton(props: ButtonProps): React.JSX.Element {
  const { title, isLoading, type, ...rest } = props;
  return (
    <Pressable
      style={[styles.container, type === 'filled' && styles.filledContainer]}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
  },
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  filledContainer: {
    backgroundColor: '#9CD3D9',
    borderColor: '#9CD3D9',
  },
});

export default MyButton;
```

### 18. `ibottomtab` – **Bottom Tab Navigator**
```javascript
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native';

// TODO: Import your screen components and icons
// import HomeScreen from '../screens/HomeScreen';
// import CartScreen from '../screens/CartScreen';
// import IconHome from '../assets/icon-home.png';
// import IconCategory from '../assets/icon-category.png';

const Tab = createBottomTabNavigator();

const Icon = (color: string, source: ImageSourcePropType) => (
  <Image style={[styles.icon, { tintColor: color }]} source={source} />
);

const IconWithBadge = (color: string, source: ImageSourcePropType, count: number) => {
  return (
    <View>
      <Image style={[styles.icon, { tintColor: color }]} source={source} />
      <View style={styles.iconBadge}>
        <Text style={styles.iconBadgeText}>{count.toString()}</Text>
      </View>
    </View>
  );
};

function MyBottomTabs(): React.JSX.Element {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'grey',
      }}
    >
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{ tabBarIcon: ({ color }) => Icon(color, IconHome) }}
      />
      <Tab.Screen
        name="CART"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => IconWithBadge(color, IconCategory, 2),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain',
  },
  iconBadge: {
    width: 16,
    height: 16,
    backgroundColor: 'red',
    borderRadius: 99,
    position: 'absolute',
    top: 0,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBadgeText: { color: '#FFF', fontWeight: 'bold', fontSize: 10 },
});

export default MyBottomTabs;
```

---

## ✍️ How to Use

1. **Install** the extension from the [VS Code Marketplace](https://marketplace.visualstudio.com/).
2. Open a `.tsx` or `.js` file.
3. Type the prefix (e.g. `ibutton`) and press `Tab` or `Enter` to expand.
4. Customize any placeholder values as per your component/slice logic.

---

## ✨ **Install Now** and start coding faster!

Feel free to modify or contribute to these snippets. Happy coding! 🎉


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
