// Dans polyfills.ts
// Polyfill pour IntersectionObserver
import 'intersection-observer';

// Si nous sommes dans un environnement Node.js (SSR)
if (typeof window === 'undefined') {
  // Créer un polyfill spécifique pour Node.js qui implémente correctement l'interface
  const mockIntersectionObserver = class MockIntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = '0px';
    readonly thresholds: ReadonlyArray<number> = [0];
    
    constructor(callback: IntersectionObserverCallback, options?: IntersectionObserverInit) {
      // Ne rien faire
    }
    
    observe(): void {}
    unobserve(): void {}
    disconnect(): void {}
    takeRecords(): IntersectionObserverEntry[] { return []; }
  };
  
  // Utiliser une déclaration de type pour éviter les erreurs TypeScript
  (global as any).IntersectionObserver = mockIntersectionObserver;
}