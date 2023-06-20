export const InvestigationTypesquery = gql`
query {
    investigation_types {
        id
        title
        investigations {
            id
            title
        }
    }
}

`

export const medicalRecordQuery = gql`
mutation ($id: [ID!]!, $ctscan: String!, $mri: String!, $dev: String!) {
    add_medical_record(
        investigations: $id
        ctscan: $ctscan
        mri: $mri
        developer: $dev
    ) {
        ctscan
        mri
    }
}
`