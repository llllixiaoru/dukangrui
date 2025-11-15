// 打字机效果
const typewriterElement = document.getElementById("typewriter");
const text =
    "你好，我是杜康瑞 —— 天津医科大学医学影像学专业，关注影像诊断与 ADPKD 机制研究。";
let index = 0;

function typeWriter() {
    if (!typewriterElement) return;
    if (index <= text.length) {
        typewriterElement.textContent = text.slice(0, index);
        index++;
        setTimeout(typeWriter, 60);
    }
}
typeWriter();

// 自动更新年份
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// 回到顶部按钮
const backBtn = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
    if (!backBtn) return;
    backBtn.style.display = window.scrollY > 320 ? "block" : "none";
});

if (backBtn) {
    backBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// 滚动淡入动画
const fadeSections = document.querySelectorAll(".fade");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.18 }
);

fadeSections.forEach(sec => observer.observe(sec));
// =============== 思维导图：节点折叠 / 展开 ===============
document.addEventListener("DOMContentLoaded", () => {
    const toggles = document.querySelectorAll("[data-node-toggle]");

    toggles.forEach(btn => {
        btn.addEventListener("click", () => {
            const branch = btn.closest(".mindmap-branch");
            if (!branch) return;

            // 找到本分支的第一层子列表
            const firstLevel = branch.querySelector(".mindmap-level");
            const indicator = btn.querySelector(".mindmap-node-indicator");

            if (!firstLevel) return;

            const isOpen = firstLevel.classList.contains("mindmap-open");
            if (isOpen) {
                firstLevel.classList.remove("mindmap-open");
                firstLevel.classList.add("mindmap-closed");
                if (indicator) indicator.textContent = "+";
            } else {
                firstLevel.classList.remove("mindmap-closed");
                firstLevel.classList.add("mindmap-open");
                if (indicator) indicator.textContent = "−";
            }
        });
    });
});
