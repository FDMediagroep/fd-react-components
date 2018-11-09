export function renderIn(selector: string): HTMLElement {
    const container = document.createElement('div');
    const parent = (document.querySelectorAll(selector) as NodeList).item(0) as HTMLElement;
    parent.appendChild(container);
    return container;
}
