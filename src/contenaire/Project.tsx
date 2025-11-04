function Project(){

    return(
<div>
    <header className="w-full text-center mb-8">
      <h1 className="text-5xl font-bold animate-fade-in-down">Mes projets</h1>
    </header>

    <section>
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl ml-5 animate-fade-in-up">
        <div className="italic p-6 bg-gray-100 rounded-lg shadow-lg hidden-on-load slide-up flex flex-col items-center animate-fade-in-up">
          <h3 className="italic text-gray-700 text-2xl font-semibold mb-3 animate-fade-in-up">Projet React + Vite</h3>
          <p className="italic text-gray-700 text-center mb-2 animate-fade-in-up">Projet Frontend - Application de compteur</p>
          <span className="italic text-sm text-gray-500 mb-4 animate-fade-in-up">2024</span>
          <ul className="italic text-left text-gray-700 list-inside animate-fade-in-up">
            <li>- Création d’une interface interactive avec React et Vite.</li>
            <li>- Mise en place d’un système de compteur avec mise à jour dynamique.</li>
            <li>- Utilisation de composants fonctionnels et du Hook <code>useState</code>.</li>
            <li>- Projet simple pour tester le rechargement à chaud (HMR).</li>
          </ul>
        </div>
      </div>
    </section>
</div>
        
    )
}

export default Project