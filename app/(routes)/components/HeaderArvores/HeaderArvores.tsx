'use client'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { CirclePlus } from 'lucide-react'
import { useEffect, useState } from 'react'
import { FormCreateArvore } from '../FormCreateArvore'
import { FormCreateCustomerProps } from '../FormCreateArvore/FormCreateArvore.types'
import Link from 'next/link'
import { useAuths } from '@/app/context/AuthContext'
import ConfirmDeleteModal from '../ListArvores/ConfirmDeleteModal'
import { deleteTree } from '@/app/api/editors'

export function HeaderArvores() {
  const [openModalCreate, setOpenModalCreate] = useState(false)
  const { userType, setShowDeleteModal, showDeleteModal, treeToDeleteId } =
    useAuths()

  useEffect(() => {
    //console.log('User type', userType)
  }, [userType])

  const formCreateArvoreProps: FormCreateCustomerProps = {
    setOpenModalCreate,
  }

  return (
    <div className="flex items-center justify-center gap-x-6">
      {showDeleteModal && (
        <ConfirmDeleteModal
          treeToDeleteId={treeToDeleteId}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      <h2 className="text-2xl">Lista das Árvores</h2>

      {userType && userType?.userGroup !== 'user' ? (
        <Link href="/nova-arvore">
          <Button>Adicionar Árvore</Button>
        </Link>
      ) : null}
      {/* <Dialog open={openModalCreate} onOpenChange={setOpenModalCreate}>
        <DialogTrigger asChild>
          <Button>Adicionar Árvore</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Adicionar</DialogTitle>
            <DialogDescription>Criar árvore</DialogDescription>
          </DialogHeader>

          <FormCreateArvore {...formCreateArvoreProps} />
        </DialogContent>
      </Dialog> */}
    </div>
  )
}
