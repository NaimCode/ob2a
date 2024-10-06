import { Award, Check, Leaf, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";
import { Button } from "./components/ui/button";
import { Card, CardContent } from "./components/ui/card";
import { pageData } from "./pageData";

// Define the page content type
type PageContent = {
  title: string;
  subtitle: string;
  mainVideo: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  testimonials: Array<{
    name: string;
    comment: string;
  }>;
  gallery: string[];
};

export default function HairProductLanding() {
  const pageContent = pageData;
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center justify-center">
          <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            O'B2A
          </span>
        </div>
        <nav className="hidden md:flex items-center justify-center flex-grow">
          {[
            { name: "Caractéristiques", id: "caracteristiques" },
            { name: "Témoignages", id: "temoignages" },
            { name: "Galerie", id: "galerie" },
            { name: "Commander", id: "commander" },
          ].map((item) => (
            <button
              key={item.name}
              className="text-sm font-medium hover:underline underline-offset-4 mx-2"
              onClick={() =>
                document
                  .getElementById(item.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {item.name}
            </button>
          ))}
        </nav>
        <div className="ml-2 flex items-center">
          <div
            className="bg-gradient-to-r from-purple-100 to-pink-100 text-black px-3 py-1 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => window.open("https://wa.me/33765835108", "_blank")}
          >
            +33 7 65 83 51 08
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-14 md:py-4 lg:py-6 xl:py-8 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_400px]">
              <div className="mx-auto w-full max-w-[400px] aspect-[9/15] overflow-hidden rounded-xl sm:w-full lg:order-last">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={pageContent.mainVideo} type="video/mp4" />
                  Votre navigateur ne prend pas en charge la lecture de vidéos.
                </video>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none text-center md:text-left">
                    {pageContent.title}
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl text-center md:text-left">
                    {pageContent.subtitle}
                  </p>
                  {/* New: Added rating and sales info */}
                  <div className="flex items-center justify-center md:justify-start space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-yellow-400 stroke-yellow-400"
                        />
                      ))}
                    </div>
                    <span className="text-white font-medium">
                      (4.8/5 sur 1000+ avis)
                    </span>
                  </div>
                  <p className="text-white text-center md:text-left">
                    <ShoppingCart className="inline-block mr-2" />
                    Plus de 10,000 packs vendus !
                  </p>
                  {/* New: Added promotional text */}
                  <p className="text-yellow-300 font-semibold md:text-lg text-center md:text-left animate-pulse">
                    🎁 Offre spéciale : Un peigne en bambou GRATUIT pour les
                    premiers acheteurs !
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4 justify-center md:justify-start">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-purple-900 font-semibold hover:from-amber-400 hover:via-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-full px-8 py-3 flex items-center space-x-2"
                    onClick={() =>
                      window.open("https://amzn.eu/d/iWwfROJ", "_blank")
                    }
                  >
                    <span>Profiter de l'Offre Maintenant</span>
                  </Button>
                  {/* New: Added countdown timer */}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New: Added trust badges section */}
        <section className="w-full py-6 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center space-x-2">
                <Award className="h-6 w-6 text-purple-600" />
                <span className="font-medium">Qualité Premium</span>
              </div>
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-purple-600" />
                <span className="font-medium">Naturel</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-6 w-6 text-purple-600" />
                <span className="font-medium">Satisfaction Garantie</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="caracteristiques"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Pourquoi Choisir Le Shampooing O'B2A ?
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {pageContent.features.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 text-white">
                      {/* You might want to create a mapping for icons */}
                      <Check className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-center text-gray-500">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="temoignages" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Ce que Disent Nos Clients
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              {pageContent.testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <CardContent className="flex flex-col items-center space-y-2 p-6">
                    <div className="flex space-x-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-primary" />
                      ))}
                    </div>
                    <p className="text-center text-gray-500">
                      "{testimonial.comment}"
                    </p>
                    <p className="font-semibold">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="galerie"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Galerie
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center">
              {pageContent.gallery.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg bg-white p-2 sm:p-4 cursor-pointer"
                  onClick={() => setPreviewImage(image)}
                >
                  <img
                    src={image}
                    alt={`Image de galerie ${index + 1}`}
                    className="transition-transform duration-300 hover:scale-110 object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="commander"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500"
        >
          <div className="container mx-auto px-4 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Prêt à Transformer vos Cheveux ?
                </h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Commandez maintenant et découvrez la différence O'B2A. Vos
                  cheveux vous remercieront !
                </p>
              </div>
              {/* New: Added urgency elements */}
              <div className="bg-white bg-opacity-10 rounded-lg p-4 mt-4">
                <p className="text-white font-bold mb-2">
                  🔥 Offre à Durée Limitée !
                </p>
                <p className="text-white">
                  Stock très limité ! Dernières unités disponibles !
                </p>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-purple-900 font-semibold hover:from-amber-400 hover:via-yellow-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-full px-8 py-3 flex items-center space-x-2"
                onClick={() =>
                  window.open("https://amzn.eu/d/iWwfROJ", "_blank")
                }
              >
                <span>Brillez Maintenant</span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Image Preview Modal */}
      {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setPreviewImage(null)}
        >
          <div className="max-w-4xl max-h-[90vh] overflow-auto">
            <img
              src={previewImage}
              alt="Preview"
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 O'B2A. Tous droits réservés.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <button className="text-xs hover:underline underline-offset-4">
            Conditions d'utilisation
          </button>
          <button className="text-xs hover:underline underline-offset-4">
            Confidentialité
          </button>
        </nav>
      </footer>
    </div>
  );
}
