"use client";

import { useState } from "react";
import Image from "next/image";
import { Clock, Users, ArrowLeft, X, Utensils } from "lucide-react";
import Link from "next/link";
import NaturalParticles from "@/components/NaturalParticles";

type Recipe = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  prepTime: string;
  cookTime: string;
  servings: string;
  recommendedRice: string;
  ingredients: string[];
  instructions: string[];
};

const recipes: Recipe[] = [
  {
    id: "veg-biryani",
    title: "Premium Vegetable Biryani",
    category: "Basmati Delicacy",
    description: "An authentic Indian celebration of spices, saffron, and mixed vegetables layered with perfectly fluffy, extra-long grains of Basmati rice cooked to perfection.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=800",
    prepTime: "20 mins",
    cookTime: "35 mins",
    servings: "4 servings",
    recommendedRice: "NeemSai 1121 Basmati Rice",
    ingredients: [
      "2 cups NeemSai 1121 Basmati Rice",
      "1 cup mixed chopped vegetables (carrots, green beans, peas, potato)",
      "1/2 cup fresh yogurt (curd)",
      "1/4 cup fresh mint leaves, chopped",
      "1/4 cup coriander leaves, chopped",
      "1 pinch saffron soaked in 2 tbsp warm milk",
      "1 large onion, thinly sliced (for fried onions/birista)",
      "2 tbsp ghee & 1 tbsp oil",
      "Whole spices: 1 bay leaf, 1 cinnamon stick, 3 cardamom pods, 4 cloves",
      "Spices: 1 tsp garam masala, 1 tsp red chili powder, 1/2 tsp turmeric",
      "Salt to taste"
    ],
    instructions: [
      "Wash and soak NeemSai 1121 Basmati Rice for 30 minutes in water. Drain well.",
      "Bring 6 cups of water to a boil with whole spices and 1 tbsp salt. Add rice and cook until 70% done. Drain the rice and set aside.",
      "Heat ghee and oil in a deep pot. Fry the sliced onions until deep golden brown. Set aside half for garnish.",
      "In the same pot, add the mixed vegetables, yogurt, red chili powder, garam masala, turmeric, and salt. Cook for 8-10 minutes until tender.",
      "To layer the biryani: spread half the cooked vegetables, layer half the cooked rice on top, sprinkle half the fried onions, mint, and coriander.",
      "Repeat with the remaining vegetables and rice. Pour the saffron milk on top and scatter the remaining fried onions, mint, and coriander.",
      "Cover the pot tightly with a lid (or seal with foil) and cook on very low heat (dum) for 15-20 minutes. Serve hot with raita."
    ]
  },
  {
    id: "lemon-rice",
    title: "Tangy South Indian Lemon Rice",
    category: "Quick & Easy",
    description: "A bright, aromatic, and tangy classic South Indian dish flavored with fresh lemon juice, mustard seeds, curry leaves, and roasted peanuts.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=800",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: "3 servings",
    recommendedRice: "NeemSai Sona Masoori Rice",
    ingredients: [
      "2 cups NeemSai Sona Masoori Rice (cooked and cooled)",
      "3 tbsp fresh lemon juice",
      "1/4 cup peanuts",
      "1 tsp mustard seeds",
      "1 tsp split urad dal",
      "10-12 fresh curry leaves",
      "1/2 tsp turmeric powder",
      "2 green chilies, slit",
      "1 tsp finely grated ginger",
      "2 tbsp sesame or peanut oil",
      "Salt to taste"
    ],
    instructions: [
      "Cook NeemSai Sona Masoori Rice and spread it on a wide plate to cool. Ensure the grains are separate.",
      "Heat oil in a pan on medium heat. Add peanuts and fry until they turn golden-brown and crunchy. Remove and set aside.",
      "In the same oil, add mustard seeds. When they splutter, add the urad dal and roast until light brown.",
      "Add grated ginger, green chilies, and curry leaves. Sauté for a minute until fragrant.",
      "Turn off the heat, add turmeric powder, lemon juice, and salt. Mix well.",
      "Pour this tempering over the cooled rice, add the roasted peanuts, and mix gently with a spoon or your fingertips to avoid breaking the grains. Serve with papad."
    ]
  },
  {
    id: "mushroom-pulao",
    title: "Aromatic Mushroom Pulao",
    category: "One-Pot Meal",
    description: "A fragrant and hearty one-pot dish where juicy button mushrooms and premium Basmati rice are simmered together in a spiced broth.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=800",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: "3 servings",
    recommendedRice: "NeemSai Pusa Basmati Rice",
    ingredients: [
      "1.5 cups NeemSai Pusa Basmati Rice",
      "200g white button mushrooms, cleaned and sliced",
      "1 medium onion, thinly sliced",
      "1 tsp ginger-garlic paste",
      "2 green chilies, slit",
      "1 tsp cumin seeds",
      "Whole spices: 1 star anise, 2 cardamoms, 1 small cinnamon stick",
      "2 tbsp ghee or oil",
      "1/2 tsp garam masala",
      "3 cups water",
      "Salt to taste"
    ],
    instructions: [
      "Wash and soak NeemSai Pusa Basmati Rice in water for 20 minutes. Drain well.",
      "Heat ghee or oil in a pressure cooker or deep pot. Add cumin seeds and whole spices; sauté until fragrant.",
      "Add sliced onions and green chilies. Fry until the onions turn translucent and soft.",
      "Stir in ginger-garlic paste and sauté for another minute until raw smell disappears.",
      "Add the sliced mushrooms and sauté for 3 minutes on high heat until they shrink slightly.",
      "Add the soaked rice, water, garam masala, and salt. Stir gently once.",
      "Bring the water to a boil, then cover the pot and simmer on low heat for 12-15 minutes until the rice is cooked and all liquid is absorbed. Fluff with a fork and serve."
    ]
  },
  {
    id: "veg-fried-rice",
    title: "Classic Vegetable Fried Rice",
    category: "Indo-Chinese",
    description: "A popular, smokey Chinese takeout staple made with dry, separate cooked rice grains stir-fried in a hot wok with fresh, crisp spring onions and bell peppers.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800",
    prepTime: "15 mins",
    cookTime: "10 mins",
    servings: "2 servings",
    recommendedRice: "NeemSai PR11 or IR64 Rice",
    ingredients: [
      "2 cups NeemSai PR11 or IR64 Rice (cooked and chilled overnight)",
      "1 cup finely chopped vegetables (carrots, French beans, bell peppers)",
      "1/4 cup finely chopped spring onion greens & whites",
      "1.5 tbsp finely minced garlic",
      "2 tbsp soy sauce",
      "1 tbsp vinegar",
      "1/2 tsp white pepper powder",
      "2.5 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil in a large wok on high heat until smoking.",
      "Add minced garlic and spring onion whites; stir-fry for 30 seconds on high heat.",
      "Add chopped carrots, beans, and bell peppers. Stir-fry constantly for 2 minutes to keep them crunchy.",
      "Add the cold, pre-cooked NeemSai rice and toss well to coat the grains with oil.",
      "Drizzle soy sauce, vinegar, white pepper powder, and salt. Mix and toss on high heat for 2-3 minutes until steam starts rising.",
      "Garnish with spring onion greens and serve immediately with chili paneer or Manchurian."
    ]
  }
];

export default function RecipesPage() {
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  return (
    <div className="min-h-screen bg-[#f7f3ec] text-[#2c3f16] relative overflow-hidden">
      <NaturalParticles />

      {/* Banner */}
      <section className="relative py-20 px-6 md:px-10 text-center bg-[#2c3f16] text-[#f7f3ec] overflow-hidden border-b border-[#a67c1c]/20">
        <div className="absolute inset-0 opacity-15 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1200')" }} />
        <div className="relative z-10 max-w-4xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#a67c1c] hover:underline mb-4 font-semibold">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <h1 className="font-serif-display text-5xl md:text-6xl font-bold mb-4">NeemSai Culinary Corner</h1>
          <p className="text-[#98b5a3] text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Delve into traditional and modern recipes specially crafted to complement the aroma, length, and texture of our premium rice selections.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-[#fdfcfb] border border-[#e2dbc9]/60 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={recipe.image}
                  alt={recipe.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 bg-[#2c3f16] text-[#f7f3ec] text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full shadow">
                  {recipe.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-serif-display text-xl font-bold mb-2 group-hover:text-[#a67c1c] transition-colors">
                  {recipe.title}
                </h3>
                <p className="text-[#48624a] text-xs leading-relaxed mb-6 font-light line-clamp-3">
                  {recipe.description}
                </p>

                {/* Meta stats */}
                <div className="mt-auto pt-4 border-t border-[#e2dbc9]/40 flex justify-between text-[11px] text-[#48624a]/80 font-medium">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5 text-[#a67c1c]" /> {recipe.cookTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5 text-[#a67c1c]" /> {recipe.servings}
                  </div>
                </div>

                {/* Sourcing recommendation */}
                <p className="text-[10px] text-[#a67c1c] font-bold tracking-wider uppercase mt-4">
                  Best with: {recipe.recommendedRice.split(" ").slice(1).join(" ")}
                </p>

                <button
                  onClick={() => setSelectedRecipe(recipe)}
                  className="mt-4 w-full py-2.5 rounded-xl border border-[#2c3f16] text-[#2c3f16] text-xs font-semibold uppercase tracking-wider hover:bg-[#2c3f16] hover:text-[#fcf5e5] transition duration-300"
                >
                  View Full Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recipe Modal Popup */}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-2xl bg-[#fdfcfb] rounded-3xl overflow-hidden shadow-2xl border border-[#e2dbc9]/60 max-h-[85vh] flex flex-col animate-fade-in-up">
            
            {/* Modal Header */}
            <div className="bg-[#2c3f16] text-[#f7f3ec] p-6 pr-14 relative border-b border-[#a67c1c]/20">
              <span className="text-[10px] uppercase tracking-widest text-[#a67c1c] font-bold mb-1 block">
                {selectedRecipe.category}
              </span>
              <h2 className="font-serif-display text-2xl md:text-3xl font-bold">{selectedRecipe.title}</h2>
              <button
                onClick={() => setSelectedRecipe(null)}
                className="absolute top-6 right-6 p-1.5 rounded-full hover:bg-white/10 text-[#fcf5e5]/80 hover:text-[#fcf5e5] transition"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Modal Scroll Body */}
            <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-grow">
              
              {/* Rice Match Banner */}
              <div className="flex items-center gap-4 bg-[#f7f3ec] border border-[#e2dbc9]/60 rounded-xl p-4">
                <Utensils className="h-10 w-10 text-[#a67c1c] shrink-0" />
                <div>
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[#a67c1c]">Perfect Rice Pairing</h4>
                  <p className="text-sm font-semibold">{selectedRecipe.recommendedRice}</p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {/* Ingredients */}
                <div>
                  <h3 className="font-serif-display text-lg font-bold border-b border-[#e2dbc9] pb-2 mb-3">Ingredients</h3>
                  <ul className="space-y-2">
                    {selectedRecipe.ingredients.map((ing, i) => (
                      <li key={i} className="text-xs text-[#48624a] flex items-start gap-2 leading-relaxed">
                        <span className="text-[#a67c1c] font-bold mt-0.5">•</span> {ing}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats & Image */}
                <div className="space-y-4">
                  <div className="relative h-44 rounded-xl overflow-hidden shadow">
                    <Image
                      src={selectedRecipe.image}
                      alt={selectedRecipe.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-center text-xs">
                    <div className="bg-[#f7f3ec] p-2.5 rounded-lg border border-[#e2dbc9]/40">
                      <p className="text-[10px] text-[#48624a]/70 uppercase">Prep</p>
                      <p className="font-bold">{selectedRecipe.prepTime}</p>
                    </div>
                    <div className="bg-[#f7f3ec] p-2.5 rounded-lg border border-[#e2dbc9]/40">
                      <p className="text-[10px] text-[#48624a]/70 uppercase">Cook</p>
                      <p className="font-bold">{selectedRecipe.cookTime}</p>
                    </div>
                    <div className="bg-[#f7f3ec] p-2.5 rounded-lg border border-[#e2dbc9]/40">
                      <p className="text-[10px] text-[#48624a]/70 uppercase">Serves</p>
                      <p className="font-bold">{selectedRecipe.servings.split(" ")[0]}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div>
                <h3 className="font-serif-display text-lg font-bold border-b border-[#e2dbc9] pb-2 mb-4">Instructions</h3>
                <ol className="space-y-4">
                  {selectedRecipe.instructions.map((step, idx) => (
                    <li key={idx} className="text-xs text-[#48624a] flex gap-3 items-start leading-relaxed">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2c3f16] text-[10px] font-bold text-[#fcf5e5]">
                        {idx + 1}
                      </span>
                      <p className="flex-grow pt-0.5">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="bg-[#f7f3ec] border-t border-[#e2dbc9]/40 p-4 flex justify-end">
              <button
                onClick={() => setSelectedRecipe(null)}
                className="bg-[#2c3f16] text-[#fcf5e5] px-6 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider hover:bg-[#1d2a0f] transition"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
