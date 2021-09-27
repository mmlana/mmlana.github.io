<template>
    <section class="mb-5" id="about">
        <div class="p-3">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 bg-pattern-wind">
                        <div class="desc">
                            <div class="title" v-scroll-reveal="{ delay: 250 }">
                                <h2 class="text-custom">
                                    About Me
                                </h2>
                            </div>
                            <p v-scroll-reveal="{ delay: 350 }">
                                <!-- Kenalkan saya Maulana, saya adalah seorang Web
                                Developer. Saya mulai menekuni dunia
                                pemrogramman pada tahun 2016 saat saya berada di
                                kuliah dengan program studi D3 Komputerisasi
                                Akuntansi di Universitas Telkom dan saat ini
                                saya melanjutkan studi S1 Sistem Informasi di
                                Universitas Widyatama. Sampai saat ini saya
                                masih aktif melakukan kegiatan programming
                                dengan status sebagai PHP Developer di sebuah
                                perusahaan di Kota Bandung. -->
                                Hi, I am Muhammad Maulana usually called
                                <strong>Maulana</strong> I am a Web Developer. I
                                started to pursue the world of programming in
                                2016 when I was in college with a D3
                                Computerized Accounting study program at Telkom
                                University and currently I am continuing to
                                study S1 Information Systems at Widyatama
                                University. Until now, I am still actively doing
                                programming activities with the status as a PHP
                                Programmer in a company in the city of Bandung.
                            </p>
                        </div>
                    </div>
                    <div
                        class="col-lg-5 text-center"
                        v-scroll-reveal="{ delay: 450 }"
                    >
                        <img
                            class="rounded img-fluid shadow-lg"
                            src="https://source.unsplash.com/350x350/?person"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        console.log("About Component mounted.");
    }
};
</script>

<style scoped></style>
