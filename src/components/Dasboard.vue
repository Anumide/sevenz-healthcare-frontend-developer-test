<template>
<div class="dashboard-wrapper">
    <div class="title-bar">
        <h1 class="fw-bold fs-3 mb-xl-3 mb-2">Update Patient Medical Record</h1>
        <p class="">Click the tabs to view and edit patient medical details</p>
    </div>
    <div class="category-wrapper bg-white">
        <div 
            v-for="investigationType in data.investigation_types"
            :key="investigationType.id"
        >
            <div class="category">
            <p class="fw-bold">{{ investigationType.title }}</p>
            <div class="w-100">
                <div class="row gx-2 gy-3 gy-md-4">
                    <div 
                        v-for="investigation in investigationType.investigations"
                        :key="investigation.id"
                        class="col-xl-3 col-lg-4 col-6"
                    >
                        <div class="form-check">
                            <input 
                                :id="String(investigation.id)"
                                class="form-check-input" 
                                type="checkbox" 
                                :value="investigation.id"
                                v-model="investigationId" 
                            >
                            <label class="form-check-label fw-semibold" :for="String(investigation.id)">
                                {{ investigation.title }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <hr />
        </div>                                                  
        <div class="row gx-5 gy-3 gy-md-0 my-4">
            <div class="form-data col-md-6">
                <label for="ct-scan" class="form-label">CT Scan</label>
                <input 
                    v-model="CTscan" 
                    type="text" 
                    class="form-control" 
                    id="ct-scan"
                    placeholder="*Specify"
                    required
                >
            </div>
            <div class="form-data col-md-6">
                <label for="mri" class="form-label">MRI</label>
                <input 
                    v-model="MRI"
                    type="text" 
                    class="form-control" 
                    id="mri" 
                    placeholder="*Specify"
                    required
                >
            </div>
        </div>
        <div class="button-wrapper">
            <button type="button" class="btn fw-semibold mt-3 text-white" @click="createMedicalRecord">Save and Send</button>
        </div>
    </div>
</div>
</template>
    
<script setup lang="ts">
import type { Investigation_types } from "~/src/graphql/apollo-type"
import { InvestigationTypesquery, medicalRecordQuery } from "~/src/graphql/apollo-query"
const investigationId = ref([])
const CTscan = ref('')
const MRI = ref('')

const { data, error } = useAsyncQuery<{investigation_types: Investigation_types[]}>(InvestigationTypesquery)


const createMedicalRecord = async () => {
    const variables = {
        id: investigationId.value,
        ctscan: CTscan.value.trim(),
        mri: MRI.value.trim(),
        dev: 'Developer'
    }
    const { mutate } = useMutation(medicalRecordQuery, { variables })
    if (CTscan.value.trim() === "" || MRI.value.trim() === "" || investigationId.value.length === 0) {
        window.alert('Please Input CT scan and MRI and select investigation')
        return
    }
    try {
        const response =  await mutate()
        window.alert(`Submitted ${response?.data.add_medical_record.ctscan} and ${response?.data.add_medical_record.mri} Successfully!`)
        CTscan.value = ''
        MRI.value
        investigationId.value = []
    } catch (error) {
        window.alert(error)
    }
}
</script>
    
<style scoped>
.title-bar{
    margin: 2rem 0 0 0;
}
.title-bar h1{
    /* font-size: 2rem; */
    color: #382F90;
}
.title-bar p,
.form-data label{
    font-size: 0.9rem;
    color: #9FA2B4;
}

.category p{
    color: #382F90;
}

.category-wrapper {
    padding: 1rem;
}

.button-wrapper{
    display: flex;
    justify-content: flex-end;
}

button{
    background-color: #382F90;
}

button:hover, button:active{
    background-color: rgba(56, 47, 144, 0.8);
}

input[type="text"]::placeholder {
    color: #9FA2B4;
    font-size: 14px;
}


@media screen and (min-width: 768px) and (max-width: 1200px) {
    .category-wrapper {
        padding: 1rem 2rem;
    }
}

@media screen and (min-width: 1200px) {
    .category-wrapper {
        padding: 2rem 3rem 2rem 4rem;
    }
}
</style>