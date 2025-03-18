import axios from 'axios'

describe('POST@/users/signup', () => {

    it('should return 201 and the user', async () => {
        // Test code here'
        const result = await axios.post('http://localhost:3000/users/signup')

        
        expect(result.status).toBe(201)
        expect(result.data).toBe('Success')

    })
})