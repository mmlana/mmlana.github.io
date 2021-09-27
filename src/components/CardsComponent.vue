<template>
    <div class="card-wrap" @mouseenter="handleMouseEnter" ref="card">
        <div class="card rounded" :style="cardStyle">
            <a :href="dataLink" target="_blank">
                <div class="card-bg" :style="[cardBgImage]"></div>
                <div class="card-info">
                    <slot name="header"></slot>
                    <slot name="content"></slot>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    props: ["dataImage", "dataLink"],
    mounted() {
        console.log("Cards Component mounted.");
        this.width = this.$refs.card.offsetWidth;
        this.height = this.$refs.card.offsetHeight;
    },
    data: () => ({
        width: 0,
        height: 0,
        mouseX: 0,
        mouseY: 0,
        mouseLeaveDelay: null
    }),
    computed: {
        mousePX() {
            return this.mouseX / this.width;
        },
        mousePY() {
            return this.mouseY / this.height;
        },
        cardStyle() {
            const rX = this.mousePX * 30;
            const rY = this.mousePY * -30;
            return {
                transform: `rotateY(${rX}deg) rotateX(${rY}deg)`
            };
        },
        cardBgImage() {
            return {
                backgroundImage: `url(${this.dataImage})`
            };
        }
    },
    methods: {
        handleMouseEnter() {
            clearTimeout(this.mouseLeaveDelay);
        },
        handleMouseLeave() {
            this.mouseLeaveDelay = setTimeout(() => {
                this.mouseX = 0;
                this.mouseY = 0;
            }, 1000);
        }
    }
};
</script>

<style scoped>
.card-wrap {
    margin: 10px;
    cursor: pointer;
}
.card-wrap:hover .card-info {
    transform: translateY(0);
}
.card-wrap:hover .card-info p {
    opacity: 1;
}
.card-wrap:hover .card-info,
.card-wrap:hover .card-info p {
    transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.card-wrap:hover .card-info:after {
    transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
    opacity: 1;
    transform: translateY(0);
}

.card {
    position: relative;
    flex: 0 0 240px;
    width: 100%;
    height: 320px;
    background-color: #333;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
    transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-bg {
    opacity: 0.5;
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
        opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    pointer-events: none;
}

.card-info {
    padding: 20px;
    position: absolute;
    bottom: 0;
    color: #fff;
    transform: translateY(40%);
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info p {
    opacity: 0;
    text-shadow: black 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
    margin-bottom: 0;
}
.card-info * {
    position: relative;
    z-index: 1;
}
.card-info:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
        to bottom,
        transparent 0%,
        rgba(0, 0, 0, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-info h1 {
    text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
}
</style>
