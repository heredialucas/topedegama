export type FormData = {
    eventType: string;
    name: string;
    date: string;
    startTime: string;
    endTime: string;
    venue: string;
    guests: string;
    selectedCocktails: string[];
    needsGlassware: string;
    gaseosas: boolean;
    jugos: boolean;
    aguaMineral: boolean;
    soda: boolean;
    otherCocktail?: string;
};
