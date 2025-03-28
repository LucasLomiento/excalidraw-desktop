document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const excalidrawContainer = document.createElement("div");
  excalidrawContainer.style.width = "100%";
  excalidrawContainer.style.height = "100%";
  excalidrawContainer.style.position = "absolute";
  root.appendChild(excalidrawContainer);

  const App = () => {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement(ExcalidrawLib.Excalidraw, {
        initialData: {
          appState: { showWelcomeScreen: true },
        },
      })
    );
  };

  const reactRoot = ReactDOM.createRoot(root);
  reactRoot.render(React.createElement(App));
});
