import "@styles/globals.css";
export const metadata = {
    title: "Ganesha",
    description: "Build a multilingual platform with comprehensive services, location-based features, public transportation integration, and user support for foreigners living in Japan to easily access laundry stations, post/ward offices, libraries, and facilities for health, sports, garbage recycling, and others."
}

const RootLayout = ({ children }) => {
  return (
    <html Lang="en">
        <body>
            <div className="main">
                <div className="gradient"></div>
            </div>
            <main className="app">
                {children}
            </main>
        </body>

    </html>
  )
}

export default RootLayout;