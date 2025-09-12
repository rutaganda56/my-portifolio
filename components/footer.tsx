export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-max">
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold">Ruta00</div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© 2025 | Rutaganda Jean Valentin</span>
              <span>📍 Kigali, Rwanda</span>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <span className="text-white text-sm">📷</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <span className="text-white text-sm">💼</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
