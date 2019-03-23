# fcc-snippets

This repo contains javascript snippets used to solve challenges for the fcc course content. It ain't pretty...

## Extending the markup here for the Markup Previwer project

Test requirements: contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.

> Here's a link to my codepen.io practice area: [codepen](https://codepen.io/RussBeall/)

Here's some react boilerplate code for codepen, which is useful since the setup is a bit different that an independent project.
```javascript
const KEYDOWN = 'KEYDOWN';

const applyKeyDown = () => {
  return {
    type: KEYDOWN,
    value: ''
  }
};

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case KEYDOWN:
      return {
        type: KEYDOWN,
        value: action.value
      }
      break;
    default:
      return state;
      break;
  }
};

class MarkdownApp extends React.Component {
  constructor(props){
    super(props);
  }  
  render() {
    return (
      <div>
        <h1>Markdown Previewer</h1>
        <textarea id="editor"></textarea>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { text: state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getText: () => {
      dispatch(applyKeyDown());
    }
  };
};

const store = Redux.createStore( rootReducer, Redux.applyMiddleware(ReduxThunk.default));
const connect = ReactRedux.connect;
const ConnMarkdownApp = connect(mapStateToProps, mapDispatchToProps)(MarkdownApp);
ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ConnMarkdownApp />
  </ReactRedux.Provider>,
  document.getElementById('root')
);
```
and don't forget the HTML root div:
```html
<div id="root"></div>
```
In particular, I couldn't get the redux-thunk **thunk** declared 'normally' like you would with `import thunk from {'redux-thunk'}`, so I had to directly reference the default export instead.

After I finished up this project, I'll have to followup:
* Research codepen.io docs to see if the import process for external libs/pakages is described.
* Update any of my existing codepen projects.
* Update this readme.md as needed.

Thanks for stopping by!
![image](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/330px-React-icon.svg.png)
