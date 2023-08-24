<template>
    <section>
        <h3>Añadir profesor</h3>
        <div>
            <label>Nombre:</label
            ><input type="text" v-model="teacher.teacherName" />
        </div>
        <div>
            <label>Apellido:</label
            ><input type="text" v-model="teacher.surName" />
        </div>
        <div>
            <label>DNI:</label><input type="text" v-model="teacher.dni" />
        </div>
        <div>
            <label>Materias:</label><input type="text" v-model="subject" />
            <button @click="HandlerClickSubject()">Agregar</button>
        </div>
        <div>
            <ul>
                <li v-for="(elem, index) in teacher.subjects" :key="index">
                    {{ elem }}
                </li>
            </ul>
        </div>
        <input type="checkbox" v-model="teacher.doc" />Documentacion Entregada
        <button @click="HandlerAddTeacher()">Agregar</button>
        <section>
            <h3>Listado de Profesores</h3>
            <table>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>DNI</th>
                    <th>Materias</th>
                    <th>Documentacion Entregada</th>
                </tr>
                <tr v-for="elem in tearchers" :key="dni">
                    <td>{{ elem.teacherName }}</td>
                    <td>{{ elem.surName }}</td>
                    <td>{{ elem.dni }}</td>
                    <td>
                        <ul>
                            <li
                                v-for="(mat, index) in elem.subjects"
                                :key="index"
                            >
                                {{ mat }}
                            </li>
                        </ul>
                    </td>
                    <td v-if="elem.doc">Entregada</td>
                    <td v-else>NO Entregada</td>
                </tr>
            </table>
        </section>
    </section>
</template>
<script lang="ts" setup>
    import { ref, Ref } from "vue";
    interface ITeacher {
        teacherName: string;
        surName: string;
        dni: string;
        subjects: Array<string>;
        doc: boolean;
    }

    let teacher: Ref<ITeacher> = ref({
        teacherName: "",
        surName: "",
        dni: "",
        subjects: [],
        doc: false,
    });

    let tearchers: Ref<Array<ITeacher>> = ref([]);
    let subject: Ref<string> = ref("");

    const HandlerClickSubject = (): void => {
        teacher.value.subjects.push(subject.value);
        subject.value = "";
    };
    const HandlerAddTeacher = (): void => {
        tearchers.value.push({ ...teacher.value }); // Agregar una copia del objeto
        teacher.value.teacherName = "";
        teacher.value.surName = "";
        teacher.value.dni = "";
        teacher.value.subjects = [];
        teacher.value.doc = false;
    };
</script>

<style scoped></style>
