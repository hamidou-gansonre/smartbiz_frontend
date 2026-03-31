import Link from "next/link";

export default function Home() {
  return (
  
    <main
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay léger pour adoucir si besoin */}
      <div className="absolute inset-0 bg-white/10" />
 
      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-3xl mx-auto">
        {/* Titre principal */}
        <h1
          className="text-5xl md:text-5xl font-extrabold leading-tight mb-6 smartbiz-text-primary"
        >
          Créez et gérez vos factures
          <br />
          et dépenses simplement
        </h1>
      
        {/* Sous-titre */}
        <p
          className="text-lg md:text-xl font-semibold mb-10 smartbiz-text-secondary"
        >
          Une plateforme moderne et complète de gestion intelligente
          <br className="hidden sm:block" />
          pour optimiser votre activité
        </p>
 
        {/* Boutons CTA */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
          {/* Bouton Découvrir → /signup */}
          <Link
            href="/auth/signup"
            className="flex-1 py-4 px-8 rounded-full text-white font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] text-center smartbiz-primary-btn"
          >
            Découvrir
          </Link>
 
          {/* Bouton Se connecter → /login */}
          <Link
            href="/auth/login"
            className="flex-1 py-4 px-8 rounded-full font-semibold text-base transition-all duration-200 hover:bg-blue-50 active:scale-[0.98] text-center smartbiz-btn-outline"
          >
            Se connecter
          </Link>
        </div>
      </div>
    </main>
  );
}
