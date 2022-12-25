<template>
    <li class="logo-luffy circle-spinning">
        <div class="line"></div>
        <div class="line"></div>
        <div class="line"></div>
        {{ logoText }}
    </li>
</template>

<script setup>
const logoText = "luffy";
</script>

<style scoped>
.logo-luffy {
    font-size: 3rem;
    color: #fff;
}

.colorful {
    color: #000;
}

.circle-spinning {
    position: relative;
    transform-style: preserve-3d;
    -webkit-perspective: 40rem;
    perspective: 40rem;
    pointer-events: none;
}

.circle-spinning .line {
    position: absolute;
    top: -1rem;
    left: 0.5rem;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    border-bottom: 0.2rem solid rgba(255, 165, 0, 1);
}


.circle-spinning .line:first-child {
    animation: rotate1 1.15s linear infinite;
}


.circle-spinning .line:nth-child(2) {
    animation: rotate2 1.15s linear infinite
}

.circle-spinning .line:nth-child(3) {
    animation: rotate3 1.15s linear infinite
}

.circle-spinning .line:first-child {
    animation-delay: -.8s;
}


.circle-spinning .line:nth-child(2) {
    animation-delay: -.4s
}

.circle-spinning .line:nth-child(3) {
    animation-delay: 0s
}


@keyframes rotate1 {
    0% {
        transform: rotateX(35deg) rotateY(-45deg) rotate(0)
    }

    to {
        transform: rotateX(35deg) rotateY(-45deg) rotate(1turn)
    }
}

@keyframes rotate2 {
    0% {
        transform: rotateX(50deg) rotateY(10deg) rotate(0)
    }

    to {
        transform: rotateX(50deg) rotateY(10deg) rotate(1turn)
    }
}

@keyframes rotate3 {
    0% {
        transform: rotateX(35deg) rotateY(55deg) rotate(0)
    }

    to {
        transform: rotateX(35deg) rotateY(55deg) rotate(1turn)
    }
}
</style>