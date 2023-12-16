import { getCurrentInstance } from 'vue'

export function useModal(app: ReturnType<typeof getCurrentInstance>, modalRefName: string) {
    return app?.root.refs[modalRefName] as any
}