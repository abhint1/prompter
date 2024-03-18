import "@styles/global.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "prompter",
  description: "A simple prompter for your presentations",
};

function useImperativeHandle(
  first,
  () => {
    second
  },
  [third],
)

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
        <Provider />
      </body>
    </html>
  );
};

export default RootLayout;
