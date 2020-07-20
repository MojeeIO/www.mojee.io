import Prism from "prismjs";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-typescript";

function wrap(wrapperClass, el) {
    const wrapper = document.createElement("div");
    wrapper.classList.add(wrapperClass);

    el.parentNode && el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

export const Highlight = {
    inserted(el, binding) {
        const $el = el;
        const $codeEl = $el.querySelector("code");
        const lang = binding.arg || "csharp";

        const code = $codeEl.innerText;

        if (!code) {
            throw new Error("Code must be wrapped inside `<code>` tags");
        }

        const langClass = `language-${lang}`;
        $el.classList.add(langClass);

        wrap(langClass, $el);

        $codeEl.innerHTML = Prism.highlight(code, Prism.languages[lang], lang);
    },
};
