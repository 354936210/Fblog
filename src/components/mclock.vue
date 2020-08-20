<template>
    <div id="mclock">
        <p class="date">{{ clock.date }}</p>
        <p class="time">{{ clock.time }}</p>
        <p class="text">DIGITAL CLOCK with Vue.js</p>
    </div>
</template>

<script>
    export default {

        data() {
            return{
                week: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
                clock:{
                    time: '',
                    date: '',
                }
            }
        },
        name: "mclock",
        methods: {
            updateTime: function () {
                var cd = new Date();
                this.clock.time = this.zeroPadding(cd.getHours(), 2) + ':' + this.zeroPadding(cd.getMinutes(), 2) + ':' + this.zeroPadding(cd.getSeconds(), 2);
                this.clock.date = this.zeroPadding(cd.getFullYear(), 4) + '-' + this.zeroPadding(cd.getMonth() + 1, 2) + '-' + this.zeroPadding(cd.getDate(), 2) + ' ' + this.week[cd.getDay()];
            },

            zeroPadding: function (num, digit) {
                var zero = '';
                for (var i = 0; i < digit; i++) {
                    zero += '0';
                }
                return (zero + num).slice(-digit);
            }
        },
        mounted() {
            var timerID = setInterval(this.updateTime, 1000);
            this.updateTime();
        }
    }
</script>

<style scoped>
    html, body {
        height: 100%;
    }

    body {
        background: #0f3854;
        background: -webkit-radial-gradient(center ellipse, #0a2e38 0%, #000000 70%);
        background: radial-gradient(ellipse at center, #0a2e38 0%, #000000 70%);
        background-size: 100%;
    }

    p {
        margin: 0;
        padding: 0;
    }

    #mclock {
        font-family: 'Share Tech Mono', monospace;
        color: #ffffff;
        text-align: center;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        color: #daf6ff;
        text-shadow: 0 0 20px #0aafe6, 0 0 20px rgba(10, 175, 230, 0);
    }
    #mclock .time {
        letter-spacing: 0.05em;
        font-size: 80px;
        padding: 5px 0;
    }
    #mclock .date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }
    #mclock .text {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding: 20px 0 0;
    }
</style>
