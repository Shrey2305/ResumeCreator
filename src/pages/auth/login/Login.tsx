import React from 'react'

function Login() {
  return (
//    <div className="space-y-8">
//       <Helmet>
//         <title>
//           {t`Sign in to your account`} - {t`Reactive Resume`}
//         </title>
//       </Helmet>

//       <div className="space-y-1.5">
//         <h2 className="text-2xl font-semibold tracking-tight">{t`Sign in to your account`}</h2>
//         <h6>
//           <span className="opacity-75">{t`Don't have an account?`}</span>
//           <Button asChild variant="link" className="px-1.5">
//             <Link to="/auth/register">
//               {t({ message: "Create one now", context: "This is a link to create a new account" })}{" "}
//               <ArrowRight className="ml-1" />
//             </Link>
//           </Button>
//         </h6>
//       </div>

//       {flags.isEmailAuthDisabled && (
//         <Alert variant="error">
//           <AlertTitle>{t`Signing in via email is currently disabled by the administrator.`}</AlertTitle>
//         </Alert>
//       )}

//       <div className={cn(flags.isEmailAuthDisabled && "pointer-events-none select-none blur-sm")}>
//         <Form {...form}>
//           <form
//             ref={formRef}
//             className="flex flex-col gap-y-4"
//             onSubmit={form.handleSubmit(onSubmit)}
//           >
//             <FormField
//               name="identifier"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>{t`Email`}</FormLabel>
//                   <FormControl>
//                     <Input
//                       autoComplete="email"
//                       className="lowercase"
//                       placeholder="john.doe@example.com"
//                       {...field}
//                     />
//                   </FormControl>
//                   <FormDescription>{t`You can also enter your username.`}</FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <FormField
//               name="password"
//               control={form.control}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>{t`Password`}</FormLabel>
//                   <FormControl>
//                     <Input type="password" autoComplete="password" {...field} />
//                   </FormControl>
//                   <FormDescription>
//                     <Trans>
//                       Hold <code className="text-xs font-bold">Ctrl</code> to display your password
//                       temporarily.
//                     </Trans>
//                   </FormDescription>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />

//             <div className="mt-4 flex items-center gap-x-4">
//               <Button type="submit" disabled={loading} className="flex-1">
//                 {t`Sign in`}
//               </Button>

//               <Button asChild variant="link" className="px-4">
//                 <Link to="/auth/forgot-password">{t`Forgot Password?`}</Link>
//               </Button>
//             </div>
//           </form>
//         </Form>
//       </div>
//     </div>
  )
}

export default Login